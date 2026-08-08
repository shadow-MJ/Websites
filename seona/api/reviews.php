<?php
require_once __DIR__ . '/../config.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $result = $conn->query("SELECT * FROM reviews ORDER BY created_at DESC, id DESC");
    $reviews = [];
    while ($row = $result->fetch_assoc()) {
        $reviews[] = [
            "id" => (int)$row['id'],
            "productId" => (int)$row['product_id'],
            "reviewerName" => $row['reviewer_name'],
            "rating" => (int)$row['rating'],
            "title" => $row['title'],
            "body" => $row['body'],
            "createdAt" => $row['created_at'],
        ];
    }
    echo json_encode($reviews);
    exit();
}

if ($method === 'POST') {
    if (empty($_SESSION['user_id'])) {
        http_response_code(401);
        echo json_encode(["error" => "Please log in to submit a review."]);
        exit();
    }
    $userId = (int)$_SESSION['user_id'];

    $data = json_decode(file_get_contents('php://input'), true);

    $productId = intval($data['productId'] ?? 0);
    $reviewerName = trim($data['reviewerName'] ?? '');
    $rating = intval($data['rating'] ?? 0);
    $title = trim($data['title'] ?? '');
    $body = trim($data['body'] ?? '');

    if (!$productId || !$reviewerName || $rating < 1 || $rating > 5) {
        http_response_code(400);
        echo json_encode(["error" => "Missing or invalid fields"]);
        exit();
    }

    $stmt = $conn->prepare(
        "INSERT INTO reviews (product_id, user_id, reviewer_name, rating, title, body, created_at) VALUES (?, ?, ?, ?, ?, ?, CURDATE())"
    );
    $stmt->bind_param("iisiss", $productId, $userId, $reviewerName, $rating, $title, $body);
    $stmt->execute();

    echo json_encode(["success" => true, "id" => $stmt->insert_id]);
    exit();
}

http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);
