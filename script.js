
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    emailjs.sendForm('service_eguszal', 'template_gn6cm1t', this)
        .then(function() {
            alert('Your message has been sent successfully!');
        }, function(error) {
            alert('Failed to send the message. Please try again later.');
        });
});
