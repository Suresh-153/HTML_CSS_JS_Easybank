document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector(".hamburger-menu");
    var close = document.querySelector(".close-menu");
    var menuOptions = document.querySelector(".menu-options");
    var isMenuClicked = false;
    // The below part of code is used to show menu options, making hamburger menu hidden and close menu to show.
    menu.addEventListener("click", function (event) {
        event.stopPropagation();
        close.style.display = "block";
        menu.style.display = "none";
        menuOptions.style.display = "block";
        isMenuClicked = true;
    });
    // The below part of code is used to close the menu options, making hamburger menu visible and close menu to hide.
    close.addEventListener("click", function (event) {
        event.stopPropagation();
        close.style.display = "none";
        menu.style.display = "block";
        menuOptions.style.display = "none"; 
        isMenuClicked = false;
    });
    // The below part of code is used to close the menu options, making hamburger visible and close menu to hide.
    document.querySelectorAll(".menu-options p").forEach(function(item) {
        item.addEventListener("click", function() {
            menuOptions.style.display = "none";
            close.style.display = "none";
            menu.style.display = "block";
            isMenuClicked = false;
        });
    });
    // The below part of code is used to close the menu options, when user clicks except the menu icon. 
    document.addEventListener("click", function () {
        if (isMenuClicked && !menuOptions.contains(event.target) && !menu.contains(event.target) && !close.contains(event.target)) {
            menuOptions.style.display = "none";
            close.style.display = "none";
            menu.style.display = "block";
            isMenuClicked = false;
        }
    });
    // The below part of code is used for showing the menu options properly based on the screen widths. 
    window.addEventListener("resize", function () {
        if (window.innerWidth >= 769) {
            menu.style.display = "none";
            close.style.display = "none";
        }
        else {
            menu.style.display = "block";
            close.style.display = "none";
        }
    });
});