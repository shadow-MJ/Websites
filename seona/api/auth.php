<?php
require_once __DIR__ . '/../config.php';

$action = $_GET['action'] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

// ---- REGISTER ----
if ($action === 'register' && $method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = trim($data['name'] ?? '');
    $email = strtolower(trim($data['email'] ?? ''));
    $password = $data['password'] ?? '';

    if (!$name || !$email || strlen($password) < 6) {
        http_response_code(400);
        echo json_encode(["error" => "Please enter your name, a valid email, and a password of at least 6 characters."]);
        exit();
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["error" => "Please enter a valid email address."]);
        exit();
    }

    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    if ($stmt->get_result()->fetch_assoc()) {
        http_response_code(409);
        echo json_encode(["error" => "An account with this email already exists. Try logging in instead."]);
        exit();
    }

    $hash = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $hash);
    $stmt->execute();
    $userId = $stmt->insert_id;

    $_SESSION['user_id'] = $userId;
    echo json_encode(["success" => true, "user" => ["id" => $userId, "name" => $name, "email" => $email]]);
    exit();
}

// ---- LOGIN ----
if ($action === 'login' && $method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $email = strtolower(trim($data['email'] ?? ''));
    $password = $data['password'] ?? '';

    if (!$email || !$password) {
        http_response_code(400);
        echo json_encode(["error" => "Please enter your email and password."]);
        exit();
    }

    $stmt = $conn->prepare("SELECT id, name, email, password_hash FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $user = $stmt->get_result()->fetch_assoc();

    if (!$user || !password_verify($password, $user['password_hash'])) {
        http_response_code(401);
        echo json_encode(["error" => "Incorrect email or password."]);
        exit();
    }

    $_SESSION['user_id'] = (int)$user['id'];
    echo json_encode([
        "success" => true,
        "user" => ["id" => (int)$user['id'], "name" => $user['name'], "email" => $user['email']],
    ]);
    exit();
}

// ---- LOGOUT ----
if ($action === 'logout') {
    $_SESSION = [];
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000, $params["path"], $params["domain"], $params["secure"], $params["httponly"]);
    }
    session_destroy();
    echo json_encode(["success" => true]);
    exit();
}

// ---- CURRENT USER ----
if ($action === 'me' && $method === 'GET') {
    if (!empty($_SESSION['user_id'])) {
        $stmt = $conn->prepare("SELECT id, name, email FROM users WHERE id = ?");
        $stmt->bind_param("i", $_SESSION['user_id']);
        $stmt->execute();
        $user = $stmt->get_result()->fetch_assoc();
        if ($user) {
            echo json_encode(["user" => ["id" => (int)$user['id'], "name" => $user['name'], "email" => $user['email']]]);
            exit();
        }
    }
    echo json_encode(["user" => null]);
    exit();
}

http_response_code(400);
echo json_encode(["error" => "Unknown auth action"]);
