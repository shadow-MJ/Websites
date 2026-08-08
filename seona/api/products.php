<?php
require_once __DIR__ . '/../config.php';

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    $stmt = $conn->prepare("SELECT * FROM products WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    echo json_encode($result->fetch_assoc() ?: null);
    exit();
}

$result = $conn->query("SELECT * FROM products ORDER BY id");
$products = [];
while ($row = $result->fetch_assoc()) {
    // Cast types so the frontend gets numbers/booleans, not strings
    $row['id'] = (int)$row['id'];
    $row['brandId'] = (int)$row['brand_id'];
    $row['catId'] = (int)$row['cat_id'];
    $row['price'] = (float)$row['price'];
    $row['originalPrice'] = $row['original_price'] !== null ? (float)$row['original_price'] : null;
    $row['imageUrl'] = $row['image_url'];
    $row['imageUrl2'] = $row['image_url2'];
    $row['isNew'] = (bool)$row['is_new'];
    $row['isBestseller'] = (bool)$row['is_bestseller'];
    $row['isFeatured'] = (bool)$row['is_featured'];
    $row['inStock'] = (bool)$row['in_stock'];
    $row['rating'] = (float)$row['rating'];
    $row['reviewCount'] = (int)$row['review_count'];
    $row['howToUse'] = $row['how_to_use'];
    unset($row['brand_id'], $row['cat_id'], $row['original_price'], $row['image_url'], $row['image_url2'],
          $row['is_new'], $row['is_bestseller'], $row['is_featured'], $row['in_stock'], $row['review_count'], $row['how_to_use']);
    $products[] = $row;
}
echo json_encode($products);
