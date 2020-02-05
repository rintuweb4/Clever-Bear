<?php

// configure
$from = 'Contact Form <danieldsoza10@gmail.com>';
$sendTo = 'Contact Form <danieldsoza10@gmail.com>';
$subject = 'New message from Cleverbear.co.uk';
$fields = array('image_radio' => 'Free Gift Name', 'member' => 'Who’s the cover for','healthcover' => 'What type of cover do you need', 'smoke' => 'Have you smoked tobacco in the last 12 months' , 'illness' => 'Have you had any life threatening illnesses in the last 10 years','children' => 'Do you have children','Message' => 'Message','name' => 'Full Name','email' => 'Email','contactNo' => 'Contact Number','occupation' => 'Occupation'); // array variable name => Text to appear in the email
$okMessage = 'Form successfully submitted. Thank you, We will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

// let's do the sending

try
{
    $emailText = "You have new message from contact form\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key]) && $key != 'healthcover') {
        $emailText .= "$fields[$key]: $value\n";
    }else{
        $emailText .= "$fields[$key]: ".implode(' , ', $value)."\n";
   }
    }

    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );
    
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}
