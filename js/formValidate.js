/*
This is the javascript function to validate contact form
This script checks all the values in fields of contact form and validate whether
the form has empty values or not. if any empty values found it throws alert with specific reason and alert sound 
it also check the format of email and length of message 
if all conditions match it will throw small alert saying successful and sweet sound
*/

function validateForm() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
  
    if (name.trim() == "" || name.trim() == null) {
        playSound(false);
        alert("Nama tidak boleh kosong");
        return false;
    } else if (!validateEmail(email.trim())) {
        playSound(false);
        alert(
            "Masukkan alamat email yang valid.\n Alamat email harus seperti xyz@xyz.xyz"
        );
        return false;
    } else if (email.trim() == "" || email.trim() == null) {
        playSound(false);
        alert("Email harus diisi.");
        return false;
    } else if (subject.trim() == "" || subject.trim() == null) {
        playSound(false);
        alert("Subjek wajib diisi");
        return false;
    } else if (phone.length > 12) {
        playSound(false);
        alert("Nomor telepon tidak boleh melebihi 12 karakter");
        return false;
    } else if (isNaN(phone)) {
        /*
        Checks either the input phone number is in numeric format or not.
        If phone number isn't in numeric format it will pop up alert with specific sound
        */
        playSound(false);
        alert("Nomor telepon harus dalam format angka");
        return false;
    } else if (message.trim() == "" || message.trim() == null) {
        playSound(false);
        alert("Pesan tidak boleh kosong");
        return false;
    } else if (message.length > 100) {
        playSound(false);
        alert("Pesan tidak boleh melebihi 100 karakter.");
        return false;
    } else {
        // Mengirim email menggunakan EmailJS
        emailjs.send("service_shn384p", "template_cc68vnw", {
            to_email: "boy12.6.1000@gmail.com",
            from_name: name,
            message: message,
            reply_to: email,
            phone: phone,
            subject: subject
        })
        .then(function(response) {
            playSound(true);
            alert(name + ", pesan Anda telah berhasil dikirim.");
        }, function(error) {
            playSound(false);
            alert("Gagal mengirim pesan. Silakan coba lagi.");
        });
  
        return false; // Mencegah form melakukan submit default
    }
  }
  
  // Mengurangi redundansi kode dengan menggunakan fungsi untuk tugas serupa
  function playSound(type) {
    if (type) {
        document.getElementById("success").play();
    } else {
        document.getElementById("alert").play();
    }
  }
  
  // Fungsi tambahan untuk memvalidasi email
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }