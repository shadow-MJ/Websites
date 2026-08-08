<?php
require_once __DIR__ . '/../config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$orderItem = trim($data['orderItem'] ?? '');
$message = trim($data['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields"]);
    exit();
}

$stmt = $conn->prepare(
    "INSERT INTO contact_messages (name, email, order_item, message) VALUES (?, ?, ?, ?)"
);
$stmt->bind_param("ssss", $name, $email, $orderItem, $message);
$stmt->execute();

echo json_encode(["success" => true, "id" => $stmt->insert_id]);
