const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// toggles the elements when clicked on hamburger menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// after clicking on a link, the nav dissapears
document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});