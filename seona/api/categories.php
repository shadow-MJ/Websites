<?php
require_once __DIR__ . '/../config.php';

$result = $conn->query("SELECT * FROM categories ORDER BY id");
$categories = [];
while ($row = $result->fetch_assoc()) {
    $row['id'] = (int)$row['id'];
    $row['imageUrl'] = $row['image_url'];
    unset($row['image_url']);
    $categories[] = $row;
}
echo json_encode($categories);
