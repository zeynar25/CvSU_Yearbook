const loginForm = document.getElementById("login-form");

function validate(e) {
    e.preventDefault();

    // id validation
    const id = document.getElementById("id");
    const idError = document.getElementById("id-error");
    if (symbolValidation(id.value)) {
        idError.innerHTML = "symbols are considered invalid characters.";

    } else if (lengthValidation("id", id.value)) {
        // first 4 digits CvSU IDs serve as year, last 5 digits is personal number 
        idError.innerHTML = "ID must contain 9 digits.";

    } else {
        idError.innerHTML = "";
    }

    // password validation
    const password = document.getElementById("password");
    const passError = document.getElementById("password-error");
    if (lengthValidation("password", password.value)) {
        passError.innerHTML = "Password must contain atleast 5 characters."

    } else {
        passError.innerHTML = "";
    }

    // once there's no error
    if (!idError.innerHTML && !passError.innerHTML) {

        // identify if it's currently in log in state
        const greet = document.getElementById("greet");
        if (greet.innerHTML === "Log in") {
            // pass credentials to a database for confirmation

        } else {
            // registration re-password validation
            const rePassword = document.getElementById("re-password");
            const rePassError = document.getElementById("re-password-error");
            if (password.value !== rePassword.value) {
                rePassError.innerHTML = "passwords do not match";

            } else {
                rePassError.innerHTML = "";
                // register credentials to a database
            }
        }
    }


}

function symbolValidation(str) {
    const regex = /-+/;
    return str.match(regex);
}

function lengthValidation(type, str) {
    if (type == "id") {
        return (str.length !== 9) ? true : false;

    } else if (type == "password") {
        return (str.length < 5) ? true : false;
    }
}

loginForm.addEventListener("submit", validate);