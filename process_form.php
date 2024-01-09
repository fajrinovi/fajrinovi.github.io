<?php
// Periksa jika formulir telah disubmit
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Mengambil data dari formulir
    $name = sanitize_input($_POST['name']);
    $email = sanitize_input($_POST['email']);
    $message = sanitize_input($_POST['message']);

    // Pastikan email yang diinput adalah valid
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Email yang dimasukkan tidak valid.");
    }

    // Alamat email tujuan
    $to = "fajri.novitasari@gmail.com";
    $subject = "Pesan Baru dari $name";

    // Isi email
    $body = "";
    $body .= "Dari: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Pesan: " . $message . "\n";

    // Header email
    $headers = "Dari: " . $email;

    // Mengirim email
    if (mail($to, $subject, $body, $headers)) {
        echo "Pesan berhasil dikirim.";
    } else {
        echo "Pesan gagal dikirim.";
    }
}

// Fungsi untuk sanitasi input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
