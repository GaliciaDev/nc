<?php
// Configuración de CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// Configuración de la base de datos
$servername = "localhost";
$username = "u224160417_backenderizo";
$password = "FW*!MW*5;h1R";
$dbname = "u224160417_clientes";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

// Obtener datos del formulario y sanitizarlos
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$password = $_POST['password'];

// Validar el email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Email inválido"]);
    exit();
}

// Determinar si es una solicitud de registro o login
$action = $_POST['action'] ?? '';

if ($action == 'register') {
    // Validar la longitud de la contraseña
    if (strlen($password) < 6) {
        echo json_encode(["status" => "error", "message" => "La contraseña debe tener al menos 6 caracteres"]);
        exit();
    }

    // Hashear la contraseña
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insertar datos en la tabla
    $sql = "INSERT INTO users (email, password) VALUES ('$email', '$hashed_password')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "Usuario agregado correctamente"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
    }
} elseif ($action == 'login') {
    // Verificar las credenciales del usuario
    $sql = "SELECT password FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Obtener la contraseña hasheada de la base de datos
        $row = $result->fetch_assoc();
        $hashed_password = $row['password'];

        // Verificar la contraseña
        if (password_verify($password, $hashed_password)) {
            echo json_encode(["status" => "success", "message" => "Inicio de sesión exitoso"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Contraseña incorrecta"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "No se encontró el usuario"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Acción no válida"]);
}

$conn->close();
?>