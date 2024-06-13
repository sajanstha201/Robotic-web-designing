document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;
    if (!name || !email || !subject || !message || !terms) {
        alert('Please fill out all fields and accept the terms.');
        return;
    }
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    // Form is valid, you can now send the data to the server or handle it as required
    alert('Message sent successfully!');
});
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}