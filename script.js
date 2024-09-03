
function sendMail() {
    var params = {
        from_name: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    // service id and template id

    emailjs.send("service_ysyu1lj", "template_4ylicx9", params)
        .then(function (response) {
            alert("Email Sent!", response.status);
            document.getElementById("contactForm").reset();

        })
        .catch(function (error) {
            alert("Error sending email:", error);
        });

    return false; // Prevent form submission

}