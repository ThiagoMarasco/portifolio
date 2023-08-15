<?php
$servername = "localhost";
$username = "root";
$password = "mcg@1637marasco!";
$dbname = "dashboard";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

$nome = $_POST['nome'];
$email = $_POST['email'];
$horarioInicio = $_POST['horario-inicio'];
$horarioFim = $_POST['horario-fim'];
$titulo = $_POST['titulo'];
$descricao = $_POST['descricao'];

// Upload da imagem
$targetDir = 'imagens/';
$targetFile = $targetDir . basename($_FILES['image']['name']);
$uploadSuccess = move_uploaded_file($_FILES['image']['tmp_name'], $targetFile);

if ($uploadSuccess) {
    // Inserir dados no banco de dados
    $sql = "INSERT INTO dashboard (nome, email,titulo, horario_inicio, horario_fim, imagem, descricao)
            VALUES ('$nome', '$email','$titulo', '$horarioInicio', '$horarioFim', '$targetFile','$descricao')";
    
    if ($conn->query($sql) === TRUE) {
        $response = array('message' => 'Evento salvo com sucesso.');
    } else {
        $response = array('message' => 'Erro ao salvar o evento: ' . $conn->error);
    }
} else {
    $response = array('message' => 'Erro ao fazer upload da imagem.');
}

$conn->close();

echo json_encode($response);
?>
