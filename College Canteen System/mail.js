emailjs.init("9Fgk8Q9vwKtYWOA9f"); // Replace with your EmailJS User ID

const sendBtn = document.querySelector('.send-btn');
const result = document.querySelector('.result');

sendBtn.addEventListener('click', sendEmail);

function sendEmail() {
    // Get the form data
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Send the email using EmailJS
    emailjs.send("service_s0dvv42", "template_hqwyc4a", {
        to_email: to,
        subject: subject,
        message: message
    })
        .then(function () {
            result.innerHTML = "Email sent successfully!";
            result.style.opacity = 1;
        }, function (error) {
            result.innerHTML = "Email sending failed!";
            result.style.opacity = 1;
        });
}