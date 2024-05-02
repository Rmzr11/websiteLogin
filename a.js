document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Dummy login check (Replace with your authentication logic)
    if (username === 'arceant11' && password === 'arceant11') {
        alert('Login successful!');
        // Redirect to another page after successful login
        window.location.href = 'https://github.com'; // Ganti 'https://github.com' dengan URL tujuan Anda
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
