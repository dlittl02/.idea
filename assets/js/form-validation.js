document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const messageInput = document.getElementById('message').value.trim();
    const successMessage = document.getElementById('success-message'); // Div for success message

    let errorMessage = ""; // Initialize error message variable
    let isValid = true; // Track form validity

    // Validate Name (minimum 2 characters)
    if (name.length < 2) {
        errorMessage += "Please enter a name with at least 2 characters.\n";
        document.getElementById('name').classList.add('invalid');
        isValid = false;
    } else {
        document.getElementById('name').classList.remove('invalid');
    }

    // Validate Email (must be in email format)
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        errorMessage += "Please enter a valid email address.\n";
        document.getElementById('email').classList.add('invalid');
        isValid = false;
    } else {
        document.getElementById('email').classList.remove('invalid');
    }

    // Validate Message (minimum 2 characters)
    if (messageInput.length < 2) {
        errorMessage += "Please enter a message with at least 2 characters.\n";
        document.getElementById('message').classList.add('invalid');
        isValid = false;
    } else {
        document.getElementById('message').classList.remove('invalid');
    }

    // Stop submission if validation fails
    if (!isValid) {
        alert(errorMessage);
        return;
    }

    // Submit the form using Fetch API to Getform.io
    fetch(this.action, {
        method: this.method,
        body: new FormData(this), // Send form data
    })
        .then(response => {
            if (response.ok) {
                // Hide the form and show success message
                const formElements = document.getElementById('contact-form');
                formElements.style.display = 'none'; // Hide the entire form

                successMessage.style.display = 'block'; // Show the success message
                successMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;

                this.reset(); // Reset the form fields
            } else {
                alert("There was an error submitting the form. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error submitting the form:", error);
            alert("There was an error submitting the form. Please try again later.");
        });
});
