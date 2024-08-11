// form itself
const form = document.querySelector("#form");

// buttons
const sign = document.querySelector("#sign");
const log = document.querySelector("#log");

// greetings
const greet = document.querySelector("#greet");

// re password in log in
const repass = document.querySelector("#re-password");

// forgot password option
const forgot = document.querySelector("#forgot");

// submit button
const btn = document.querySelector("#submit-btn");  

sign.addEventListener("click", goToSign);
log.addEventListener("click", goToLog);

function goToSign(event) {
    if (screen.width >= 700) {
        form.style.animation = "leftSlide 1200ms ease-in-out";
        form.style.transform = "translateX(0)";
    } else {
        form.style.animation = "upSlide 1200ms ease-in-out";
        form.style.transform = "translateY(0)";
    }

    repass.style.display = "block";
    forgot.style.display = "none";
    greet.innerHTML = "Sign up";
    btn.innerHTML = "signup";
    event.stopPropagation();
}

function goToLog(event) {
    if (screen.width >= 700) {
        form.style.animation = "rightSlide 1200ms ease-in-out";
        form.style.transform = "translateX(300px)";
    } else {
        form.style.animation = "downSlide 1200ms ease-in-out";
        form.style.transform = "translateY(300px)";
    }

    repass.style.display = "none";
    forgot.style.display = "block";
    greet.innerHTML = "Log in";
    btn.innerHTML = "login";
    event.stopPropagation();
}