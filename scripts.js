// scripts.js

// Example of form validation using JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Basic validation example: Check if fields are filled
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Additional validation logic can be added here

        // If all validation passes, you might submit the form via AJAX or proceed with default form submission
        form.submit();
    });
});

// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulate registration confirmation with an alert
        alert('Thank you for registering for the event!');
        registrationForm.reset(); // Optional: Reset form fields after submission
    });
});

// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const eventTitles = document.querySelectorAll('.event-title');
    const eventDescriptions = document.querySelectorAll('.event-description');

    eventTitles.forEach((title, index) => {
        title.addEventListener('click', function() {
            // Toggle visibility of event description
            eventDescriptions[index].classList.toggle('show');
        });
    });
});
