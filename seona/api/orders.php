<?php
require_once __DIR__ . '/../config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

if (empty($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(["error" => "Please log in to place an order."]);
    exit();
}
$userId = (int)$_SESSION['user_id'];

$data = json_decode(file_get_contents('php://input'), true);

$name = trim($data['name'] ?? '');
$phone = trim($data['phone'] ?? '');
$address = trim($data['address'] ?? '');
$items = $data['items'] ?? []; // [{id, qty, price}, ...]

if (!$name || !$phone || !$address || empty($items)) {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields"]);
    exit();
}

$subtotal = 0;
foreach ($items as $item) {
    $subtotal += floatval($item['price']) * intval($item['qty']);
}
$total = $subtotal; // add shipping/discount logic here later if needed

$conn->begin_transaction();
try {
    $stmt = $conn->prepare(
        "INSERT INTO orders (user_id, customer_name, phone, address, subtotal, total) VALUES (?, ?, ?, ?, ?, ?)"
    );
    $stmt->bind_param("isssdd", $userId, $name, $phone, $address, $subtotal, $total);
    $stmt->execute();
    $orderId = $stmt->insert_id;

    $itemStmt = $conn->prepare(
        "INSERT INTO order_items (order_id, product_id, qty, price) VALUES (?, ?, ?, ?)"
    );
    foreach ($items as $item) {
        $productId = intval($item['id']);
        $qty = intval($item['qty']);
        $price = floatval($item['price']);
        $itemStmt->bind_param("iiid", $orderId, $productId, $qty, $price);
        $itemStmt->execute();
    }

    $conn->commit();
    echo json_encode(["success" => true, "orderId" => $orderId, "total" => $total]);
} catch (Exception $e) {
    $conn->rollback();
    http_response_code(500);
    echo json_encode(["error" => "Failed to save order: " . $e->getMessage()]);
}
