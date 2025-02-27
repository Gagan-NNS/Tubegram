function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        alert("Login Successful! Redirecting to feed...");
        window.location.href = "feed.html"; // Redirect to feed page (to be created)
    } else {
        alert("Invalid Username or Password");
    }
}

