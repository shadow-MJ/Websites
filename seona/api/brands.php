<?php
require_once __DIR__ . '/../config.php';

$result = $conn->query("SELECT * FROM brands ORDER BY id");
$brands = [];
while ($row = $result->fetch_assoc()) {
    $row['id'] = (int)$row['id'];
    $brands[] = $row;
}
echo json_encode($brands);
