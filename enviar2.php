<?php
$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$info = $_POST['mensaje'];
$empresa = $_POST['empresa'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Nombre:" . $nombre . ",\r\n";
$mensaje .= "Empresa:" . $empresa . ",\r\n";
$mensaje .= "Mail de contacto: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());


$dest = 'martin@pow.la, guido@pow.la, felipe@pow.la ';
$asunto = 'Contacto - LANDING POW';

mail($dest, $asunto, utf8_decode($mensaje), $header);

header("Location:index.html");
?>
