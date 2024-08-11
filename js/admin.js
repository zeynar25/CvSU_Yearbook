const mode = document.getElementsByClassName("mode");
const main = document.querySelector(".main__items");
const main__filter = document.querySelector(".main__filter");
let currentMode = "Students";

let yearDrop = document.getElementById("year");
let courseDrop = document.getElementById("course");
let year = yearDrop.value;
let course = courseDrop.value;

const students = [
    {
        lastName: "Nate",
        firstName: "Ryan Renz Gabriel",
        middleInitial: "L",
        year: 2023,
        course: "BSCS",
    },
    {
        lastName: "Nate",
        firstName: "Ryan Renz Gabriel",
        middleInitial: "L",
        year: 2023,
        course: "BSCS",
    },
    {
        lastName: "Nate",
        firstName: "Ryan Renz Gabriel",
        middleInitial: "L",
        year: 2023,
        course: "BSCS",
    },
    {
        lastName: "Nate",
        firstName: "Ryan Renz Gabriel",
        middleInitial: "L",
        year: 2024,
        course: "BSCS",
    },
    {
        lastName: "Nate",
        firstName: "Ryan Renz Gabriel",
        middleInitial: "L",
        year: 2024,
        course: "BSCS",
    },
    {
        lastName: "Nate",
        firstName: "Ryan Renz Gabriel",
        middleInitial: "L",
        year: 2024,
        course: "BSCS",
    },
    {
        lastName: "Nate",
        firstName: "Ryan Renz Gabriel",
        middleInitial: "L",
        year: 2024,
        course: "BSCS",
    },
    {
        lastName: "Nate",
        firstName: "Ryan Renz Gabriel",
        middleInitial: "L",
        year: 2024,
        course: "BSCS",
    },
    {
        lastName: "Nate",
        firstName: "Ryan Renz Gabriel",
        middleInitial: "L",
        year: 2024,
        course: "N/A",
    },
    {
        lastName: "Nate",
        firstName: "Ryan Renz Gabriel",
        middleInitial: "L",
        year: "N/A",
        course: "N/A",
    }
];


const instructors = [
    {
        lastName: "Nate",
        firstName: "Rojhan Matthew",
        middleInitial: "L",
        year: 2023,
        department: "BSCS",
    },
    {
        lastName: "Nate",
        firstName: "Rojhan Matthew",
        middleInitial: "L",
        year: 2023,
        department: "BSCS",
    },
    {
        lastName: "Nate",
        firstName: "Rojhan Matthew",
        middleInitial: "L",
        year: 2024,
        department: "BSCS",
    },
    {
        lastName: "Nate",
        firstName: "Rojhan Matthew",
        middleInitial: "L",
        year: 2024,
        department: "BSCS",
    },
    {
        lastName: "Nate",
        firstName: "Rojhan Matthew",
        middleInitial: "L",
        year: 2024,
        department: "BSIT",
    },
    {
        lastName: "Nate",
        firstName: "Rojhan Matthew",
        middleInitial: "L",
        year: 2024,
        department: "BSIT",
    },
    {
        lastName: "Nate",
        firstName: "Rojhan Matthew",
        middleInitial: "L",
        year: "N/A",
        department: "N/A",
    }
];

const classes = [
    {
        course: "BSCS",
        full: "Bachelor of Science in Computer Science",
        year: 2024,
    },
    {
        course: "BSCpE",
        full: "Bachelor of Science in Computer Engineering",
        year: 2024,
    },
    {
        course: "BSIT",
        full: "Bachelor of Science in Information Technology",
        year: 2024,
    },
];

const courses = [
    {
        course: "BSCS",
        full: "Bachelor of Science in Computer Science",
    },
    {
        course: "BSCpE",
        full: "Bachelor of Science in Computer Engineering",
    },
    {
        course: "BSIT",
        full: "Bachelor of Science in Information Technology",
    },
];

const yearOptions = ["all", "N/A", 2024, 2023];
const courseOptions = ["all", "N/A", "BSCS", "BSCpE", "BSIT"];

function filterOut(){
    main.innerHTML = ``;
    switch(currentMode){
        case "Students":
            main__filter.style.display = "flex";
            main.style.marginTop = "5px";
            for(let i = 0; i < students.length; i++){
                if((students[i].year == year || year === "all") && (students[i].course == course || course === "all")){
                    main.innerHTML += `
                        <div class="main__item">${students[i].year} - ${students[i].course} - ${students[i].lastName}, ${students[i].firstName} ${students[i].middleInitial}.</div>
                    `;
                }
            }
            break;

        case "Instructors":    
            main__filter.style.display = "flex";
            main.style.marginTop = "5px";
            for(let i = 0; i < students.length; i++){
                if((instructors[i].year == year || year === "all") && (instructors[i].department == course || course === "all")){
                    main.innerHTML += `
                        <div class="main__item">${instructors[i].year} - ${instructors[i].department} - ${instructors[i].lastName}, ${instructors[i].firstName} ${instructors[i].middleInitial}.</div>
                    `;
                }
            }
            break;

        case "Classes":
            main__filter.style.display = "flex";
            main.style.marginTop = "5px";
            for(let i = 0; i < students.length; i++){
                if((classes[i].year == year || year === "all") && (classes[i].course == course || course === "all")){
                    main.innerHTML += `
                        <div class="main__item">${classes[i].year} - ${classes[i].course} - ${classes[i].full}</div>
                    `;
                }
            }
            break;

        case "Courses":
            // as you're hiding the filter option it will be left blank
            // to make the container size of the items consistent
            // I added 20px more than original top margin
            main__filter.style.display = "none";
            main.style.marginTop = "25px";
            for(let i = 0; i < courses.length; i++){
                main.innerHTML += `
                    <div class="main__item">${courses[i].course} - ${courses[i].full}</div>
                `;   
            }
            break;
    }
}

for(let i = 0; i < mode.length; i++){
    mode[i].addEventListener("click", function() {
        // checks if there's already a rate that is active
        for (let j = 0; j < mode.length; j++) {

            // if it has an active class 
            // and not equal to the clicked rate so we could avoid removing a toggled rate
            if (mode[j].className.indexOf("active") !== -1 && mode[i] !== mode[j]) {
                mode[j].classList.remove("active");
            }
        }

        if (mode[i].className.indexOf("active") === -1) {
            this.classList.add("active");
            currentMode = this.innerText;
        }

        filterOut();
    });
}

yearDrop.addEventListener("change", (e) => {
    year = e.target.value;
    filterOut();
});

courseDrop.addEventListener("change", (e) => {
    course = e.target.value;
    filterOut();
});