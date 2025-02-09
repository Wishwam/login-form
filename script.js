document.addEventListener('DOMContentLoaded', () => {
    // Password visibility toggle
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordField.type === 'password' ? 'text' : 'password';
        passwordField.type = type;
        togglePassword.classList.toggle('bx-show');
        togglePassword.classList.toggle('bx-hide');
    });

    // Toggle confirm password visibility
    toggleConfirmPassword.addEventListener('click', () => {
        const type = confirmPasswordField.type === 'password' ? 'text' : 'password';
        confirmPasswordField.type = type;
        toggleConfirmPassword.classList.toggle('bx-show');
        toggleConfirmPassword.classList.toggle('bx-hide');
    });

    // Form Validation
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission for validation

        // Collect form data
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;

        // Check if all fields are filled out
        if (!fullName || !email || !phoneNumber || !password || !confirmPassword || !dob || !gender) {
            alert('Please fill in all fields.');
            return;
        }

        // Validate email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate phone number
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phoneNumber)) {
            alert('Please enter a valid phone number (10 digits).');
            return;
        }

        // Validate password
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Password strength check (basic)
        const passwordStrengthPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordStrengthPattern.test(password)) {
            alert('Password must be at least 8 characters long and contain both letters and numbers.');
            return;
        }

        // If everything is okay, submit the form (this could be an actual form submission)
        alert('Form submitted successfully!');
        loginForm.reset(); // Clear the form
    });
});
