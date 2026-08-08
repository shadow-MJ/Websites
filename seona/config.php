<?php
// Session must start before any output — this is what lets a logged-in user
// stay logged in across requests to the different api/*.php endpoints.
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Default XAMPP MySQL credentials — change if you set a root password.
$DB_HOST = "localhost";
$DB_USER = "root";
$DB_PASS = "";
$DB_NAME = "seona_db";

$conn = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

if ($conn->connect_error) {
    header("Content-Type: application/json");
    http_response_code(500);
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}
$conn->set_charset("utf8mb4");

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
