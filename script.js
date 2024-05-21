document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const type = document.getElementById('type').value;
    const email = document.getElementById('email').value;

    const message = `Name: ${name}\nPhone: ${phone}\nType of Product: ${type}\nEmail: ${email}`;
    const mailtoLink = `mailto:knowyourcat928@gmail.com?subject=New Request&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
});
