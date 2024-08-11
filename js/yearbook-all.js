const box = document.getElementsByClassName("box");

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", function () {
        this.classList.toggle("active")
    });
}

// show the year
const year = document.getElementsByClassName("year");

for (let i = 0; i < year.length; i++) {
    year[i].addEventListener("click", function () {
        let j = this.className.indexOf('B');
        let course = "";
        while (this.className[j] != " ") {
            course += this.className[j];
            j++;
        }
        alert(`${course} ${year[i].innerText}`)
    });
}