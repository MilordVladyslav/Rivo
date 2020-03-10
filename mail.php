<?php

$c = true;
if(isset($_POST['name'])){
    $name = $_POST['name'];
}
if(isset($_POST['company'])){
    $company = $_POST['company'];
}
if(isset($_POST['email'])){
    $email = $_POST['email'];
}
if(isset($_POST['country'])){
    $country = $_POST['country'];
}
if(isset($_FILES['file'])){
    $country = $_FILES['file'];
}


$message = "<table style='width: 100%;'>$message</table>";

$message .= "
<tr>
<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Name</b></td>
<td style='padding: 10px; border: #e9e9e9 1px solid;'>$name</td>
</tr>
<tr>
<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Company</b></td>
<td style='padding: 10px; border: #e9e9e9 1px solid;'>$company</td>
</tr>
<tr>
<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Mail</b></td>
<td style='padding: 10px; border: #e9e9e9 1px solid;'>$email</td>
</tr>
<tr>
<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Country</b></td>
<td style='padding: 10px; border: #e9e9e9 1px solid;'>$country</td>
</tr>
";


//$to_email = 'toemail@gmail.com';
// $subject = 'Rivo';
// $headers[] = 'MIME-Version: 1.0';
// $headers[] = 'Content-type: text/html; charset=UTF-8';
// $headers[] = 'From:' . $name . '<noreply@ydomain.com>';

//mail($to_email, $name, $message, implode("\r\n", $headers));
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$email = new PHPMailer();
$email->setfrom('you@example.com', 'Your Name'); //Name is optional
$email->Subject   = 'Rivo';
$email->Body      = $message;
$email->AddAddress( 'some@gmail.com' );

$file_to_attach = 'test.jpeg';

$email->AddAttachment( $file_to_attach , 'test.jpeg' );

return $email->Send();

?>
