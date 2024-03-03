const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");


styleSwitcherToggle.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
});

//Hide theme selection on scroll
window.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

//Change theme
const alternateTheme = document.querySelectorAll(".alternate-theme");
function setActiveTheme(color){
    console.log("Inside change theme:", color);
    alternateTheme.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}
setActiveTheme("color-1");

//Change mode

const lightDark = document.querySelector(".day-night");

lightDark.addEventListener("click", () => {
    lightDark.querySelector("i").classList.toggle("fa-sun");
    lightDark.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        lightDark.querySelector("i").classList.add("fa-sun");
    } else {
        lightDark.querySelector("i").classList.add("fa-moon");
    }
});
