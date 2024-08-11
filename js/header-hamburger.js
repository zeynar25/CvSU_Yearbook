const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header")

const burger = document.getElementById("burger");
const exit = document.getElementById("exit");

hamburger.addEventListener("click", function(){
    header.classList.toggle("active");

    if (header.classList.contains("active"))
    {
        burger.style.display = "none"; 
        exit.style.display = "block"; 
    } 
    else
    {
        burger.style.display = "block"; 
        exit.style.display = "none"; 
    }
});