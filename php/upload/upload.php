<!-----
     <?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['image'])) {
    var_dump($_FILES);
    
    $targetDir = 'imagens/';
    $targetFile = $targetDir . basename($_FILES['image']['name']);
    $uploadSuccess = move_uploaded_file($_FILES['image']['tmp_name'], $targetFile);

    if ($uploadSuccess) {
        $response = array('message' => 'Imagem enviada com sucesso.');
    } else {
        $response = array('message' => 'Erro ao enviar a imagem.');
        if ($_FILES['image']['error'] !== UPLOAD_ERR_OK) {
            $response['error'] = 'Erro no upload: ' . $_FILES['image']['error'];
        }
    }
    

    if ($uploadSuccess) {
        $response = array('message' => 'Imagem enviada com sucesso.');
    } else {
        $response = array('message' => 'Erro ao enviar a imagem.');
    }

    echo json_encode($response);
}


?> 
-->
