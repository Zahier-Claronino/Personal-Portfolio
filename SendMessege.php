<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Define the recipient email address
    $to = "youremail@example.com";  // Replace with your email address

    // Define the subject
    $subject = "New Message from Contact Form";

    // Create the message body
    $body = "You have received a new message from the contact form.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message: \n$message";

    // Set the headers
    $headers = "From: $email";  // This ensures the email comes from the sender's email

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error: Message not sent.";
    }
}
?>