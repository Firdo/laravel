<?php

include 'functions.php';

if (!empty($_POST)){

  $data['success'] = true;
  $_POST  = multiDimensionalArrayMap('cleanEvilTags', $_POST);
  $_POST  = multiDimensionalArrayMap('cleanData', $_POST);

  //your email adress 
  $emailTo ="venkateshsr107@gmail.com"; //"yourmail@yoursite.com";

  //from email adress
  $emailFrom ="sales.foretech@gmail.com"; //"contact@yoursite.com";


  $name = $_POST["name"];
  $mobileNumber = $_POST["mobileNumber"];
  $email = $_POST["email"];
  $comment = $_POST["comment"];
  if($name == "")
   $data['success'] = false;
 

  //email subject
  $emailSubject = "New Customer Request from $name - Fore-Tech Equipments";

 $emailSubjectCus = "Greetings from Fore-Tech Equipments";

 if (!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $email)) 
   $data['success'] = false;


 if($comment == "")
   $data['success'] = false;

 if($data['success'] == true){

  $message = "NAME: $name<br>
  MOBILE NUMBER : $mobileNumber<br>
  EMAIL: $email<br>
  COMMENT: $comment";

  $messageCus = "Dear $name  
  Your Mail has been sent to Fore-tech Kitchens Representative Successfully. !! For More details Our Representative will call you shortly to your number $mobileNumber.";

  $headers = "MIME-Version: 1.0" . "\r\n"; 
  $headers .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
  $headers .= "From: <$emailFrom>" . "\r\n";
  $headers .= 'Cc:  ashokmech29@gmail.com' . "\r\n";
  $headers .= 'Cc: ramya8aug@gmail.com' . "\r\n";
  
  $headersCus = "MIME-Version: 1.0" . "\r\n"; 
  $headersCus .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
  $headersCus .= "From: <$emailFrom>" . "\r\n";
  $headersCus .= 'BCc:  venkateshsr107@gmail.com'. "\r\n";
  $headersCus .= 'BCc: ashokmech29@gmail.com '. "\r\n";
  $headersCus .= 'BCc: ramya8aug@gmail.com'. "\r\n";
  
  mail($emailTo, $emailSubject, $message, $headers);

  mail($email, $emailSubjectCus, $messageCus, $headersCus);
  
  $data['success'] = true;
  echo json_encode($data);
}
}
?>