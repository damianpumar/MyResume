<?php 
if(isset($_POST['submit'])){
    $to = "damianpumar@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Contact from personal Web site.";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>

// <!DOCTYPE html>
// <head>
// <title>Form submission</title>
// </head>
// <body>

// <form action="" method="post">
// Name: <input type="text" name="name"><br>
// Email: <input type="text" name="email"><br>
// Message:<br><textarea rows="5" name="message" cols="30"></textarea><br>
// <input type="submit" name="submit" value="Submit">
// </form>

// </body>
// </html> 