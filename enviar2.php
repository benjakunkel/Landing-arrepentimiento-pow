<?php
$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$mensaje = $_POST['mensaje'];
$empresa = $_POST['empresa'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Nombre:" . $nombre . ",\r\n";
$empresa = "Empresa:" . $empresa . ",\r\n";
$mensaje .= "Mail: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$fecha .= "Enviado el " . date('d/m/Y', time());

$para = 'benjamin@pow.la';
$asunto = 'Nuevo contacto LANDING POW';

mail($para, $asunto, utf8_decode($fecha), $header);

header("Location:index.html");
?>