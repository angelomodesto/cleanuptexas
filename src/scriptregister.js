document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        
        if (!email || !password || !confirmPassword) {
            console.error('One or more form fields are missing');
            return;
        }
        
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const confirmPasswordValue = confirmPassword.value.trim();
        
        if (passwordValue !== confirmPasswordValue) {
            alert('Passwords do not match');
            return;
        }
        
        // Here you would typically send the data to your server
        console.log('Registration data:', { email: emailValue, password: passwordValue });
        
        // Clear the form
        form.reset();
    });
});

