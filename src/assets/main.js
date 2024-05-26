document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email ||!password) {
            message.textContent = 'Please fill in all fields.';
            return;
        }

        loginUser(email, password)
         .then(response => {
                if (response.success) {
                    message.textContent = 'Login successful!';
                    // Redirect to another page or perform other actions after successful login
                } else {
                    message.textContent = 'Invalid username or password.';
                }
            })
         .catch(error => {
                console.error('Error during login:', error);
                message.textContent = 'An error occurred. Please try again.';
            });
    });

    function loginUser(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5; // Simulate random success
                resolve({ success });
            }, 1000); // Simulate network request delay
        });
    }
});