document.addEventListener('DOMContentLoaded', () => {
    
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');


    togglePassword.addEventListener('click', () => {
        const type = passwordField.type === 'password' ? 'text' : 'password';
        passwordField.type = type;
        togglePassword.classList.toggle('bx-show');
        togglePassword.classList.toggle('bx-hide');
    });

    
    toggleConfirmPassword.addEventListener('click', () => {
        const type = confirmPasswordField.type === 'password' ? 'text' : 'password';
        confirmPasswordField.type = type;
        toggleConfirmPassword.classList.toggle('bx-show');
        toggleConfirmPassword.classList.toggle('bx-hide');
    });

    
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;

        
        if (!fullName || !email || !phoneNumber || !password || !confirmPassword || !dob || !gender) {
            alert('Please fill in all fields.');
            return;
        }

        
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phoneNumber)) {
            alert('Please enter a valid phone number (10 digits).');
            return;
        }

        
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

    
        const passwordStrengthPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordStrengthPattern.test(password)) {
            alert('Password must be at least 8 characters long and contain both letters and numbers.');
            return;
        }

        
        alert('Form submitted successfully!');
        loginForm.reset(); 
    });
});
