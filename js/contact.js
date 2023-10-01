function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let number = document.getElementById("input-number").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;
    
    if (name == "" || email == "" || number == "" || subject == ""|| message == "") {
        return alert("Form must be filled!");
    }
    else {
        alert("❤ Thank You ❤")
        let emailReceiver = "jannijuniarsa23@gmail.com";
        let a = document.createElement("a");
        a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Tolong kontak saya di nomor ${number} atau email saya di ${email}`;
        a.click();
    }    
}






