//variables
let toggle = document.getElementById("toggle-js");

let navTog = document.getElementById("nav-model-js");

//events

toggle.addEventListener('click', () => {
    navTog.style.display = "block";
})

navTog.addEventListener("click", (e) => {
    if (e.target.parentElement.id !== "mobile-links" && e.target.id !== "mobile-links") {
        navTog.style.display = "none";
    }
})
