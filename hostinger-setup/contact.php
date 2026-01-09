<?php
// contact.php - place this in your site root on Hostinger
// IMPORTANT: update $to to your receiving email address before using
$to = "solutions@millennium-automation.com"; // change this
$subject_prefix = "Website contact form: ";

function safe($s){ return htmlspecialchars(trim($s), ENT_QUOTES, 'UTF-8'); }

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? safe($_POST['name']) : 'No name';
    $email = isset($_POST['email']) ? safe($_POST['email']) : 'no-reply@'.$_SERVER['SERVER_NAME'];
    $message = isset($_POST['message']) ? safe($_POST['message']) : '';
    $subject = $subject_prefix . ($name ?: 'Contact');

    $headers  = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message\n\n---\nIP: " . $_SERVER['REMOTE_ADDR'];

    if (mail($to, $subject, $body, $headers)) {
        // Redirect back to a thank-you page or to the referring page
        header("Location: /?contact=success");
        exit;
    } else {
        header("Location: /?contact=fail");
        exit;
    }
}
http_response_code(405);
echo "Method Not Allowed";
?>
