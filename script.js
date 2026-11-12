function checkStrength() {

let password = document.getElementById("password").value;

let result = document.getElementById("result");
let message = document.getElementById("message");

let score = 0;

if (password.length >= 8) {
    score++;
}

if (/[A-Z]/.test(password)) {
    score++;
}

if (/[a-z]/.test(password)) {
    score++;
}

if (/[0-9]/.test(password)) {
    score++;
}

if (/[^A-Za-z0-9]/.test(password)) {
    score++;
}

if (password.length === 0) {

    result.innerHTML = "Please enter a password";
    message.innerHTML = "";

}

else if (score <= 2) {

    result.innerHTML = "Password Strength: Weak";
    message.innerHTML = "Try adding uppercase letters, numbers and symbols.";

}

else if (score <= 4) {

    result.innerHTML = "Password Strength: Medium";
    message.innerHTML = "Your password is good, but can be improved.";

}

else {

    result.innerHTML = "Password Strength: Strong";
    message.innerHTML = "Great! Your password meets all five checks.";

}

}

function togglePassword() {

let password = document.getElementById("password");

if (password.type === "password") {

    password.type = "text";

}

else {

    password.type = "password";

}

}