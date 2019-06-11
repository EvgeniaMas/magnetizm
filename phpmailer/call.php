<?php 
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
	$phone = $_POST['user_phone'];
  $name = $_POST['user_name'];  
  $email = $_POST['user_mail'];
  $comment = $_POST['comments'];
  
//$mail->SMTPDebug = 3;      // Enable verbose debug output

$mail->isSMTP();          // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru'; 													// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = '21studiorabbits@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'qat098ery7'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->setFrom('21studiorabbits@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('21rabbits@mail.ru');
$mail->isHTML(true);   // Set email format to HTML
$mail->Subject = 'Заявка с сайта  '  .$_SERVER["SERVER_NAME"];
$mail->Body    = "<b>Заказ</b> <br><b> Имя</b> <br>" .$name. "  оставил(а) новую заявку <br> <b>телефон</b><br>" .$phone ."<br> <b>Email </b><br>" .$email . "<br><b>Комментарий</b><br>" .$comment;

$mail->AltBody = '';

if(!$mail->send()) {
    $json['error'] = 1;
} else {
   $json['error'] = 0;
}
echo json_encode($json); 
?>


