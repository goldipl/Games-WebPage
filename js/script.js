const menuButton = document.querySelector(".menuButton");
const menuItems = document.querySelector(".menuList");
const expandListButton = document.querySelectorAll(".expandList");
const anchorButton = document.querySelectorAll(".menuListAnchorClose");

// Opening and closing hamburger menu
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    menuItems.classList.toggle("open");

});

// Expanding mobile menu
expandListButton.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("open");
    });
});

// Closing hamburger menu after clicking anchor href link
anchorButton.forEach((button) => {
    button.addEventListener("click", () => {
        menuButton.classList.remove("open");
        menuItems.classList.remove("open");
    });
});