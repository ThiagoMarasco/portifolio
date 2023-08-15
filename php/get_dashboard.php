<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "mcg@1637marasco!";
$dbname = "dashboard";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Consulta ao banco de dados
$sql = "SELECT * FROM dashboard";
$result = $conn->query($sql);

$dashboard = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $dashboard[] = array(
            "imagem" => $row["imagem"],
            "titulo" => $row["titulo"],
            "horario_inicio" => $row["horario_inicio"],
            "horario_fim" => $row["horario_fim"],
            "descricao" => $row["descricao"],
            "status" => $row["status"]

        );
    }
}

$conn->close();


// ... (seu código para obter os dados do banco e criar $dashboard)

$dashboardJSON = json_encode($dashboard, JSON_UNESCAPED_SLASHES);

$pythonExecutable = "C:/Users/thiag/AppData/Local/Programs/Python/Python311/python.exe";
$pythonScript = "C:/xampp/htdocs/python/dashboard.py";

$dashboardJSON = json_encode($dashboard, JSON_UNESCAPED_SLASHES);

// Caminho completo para o arquivo JSON que você deseja salvar
$jsonFilePath = "C:/xampp/htdocs/json/dashboard.json";

// Salvar o JSON no arquivo
if (file_put_contents($jsonFilePath, $dashboardJSON) !== false) {

    $output = shell_exec("$pythonExecutable $pythonScript");
    echo $output;
} else {
    echo "Erro ao salvar o arquivo JSON.";
}

// ...







?>
