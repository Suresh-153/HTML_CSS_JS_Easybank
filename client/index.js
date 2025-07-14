document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector(".hamburger-menu");
    var close = document.querySelector(".close-menu");
    var menuOptions = document.querySelector(".menu-options");
    var isMenuClicked = false;
    // Menu can only be clicked when the screen size is at below 769. 
    menu.addEventListener("click", function (event) {
        if (window.innerWidth <= 768) {
            event.stopPropagation();
            close.style.display = "block";
            menu.style.display = "none";
            menuOptions.style.display = "block";
            isMenuClicked = true;
        }
    });
    // Menu can only be closed when the screen size is at below 769. It ensures tht the menu is already clicked. 
    close.addEventListener("click", function (event) {
        if (window.innerWidth <= 768) {
            event.stopPropagation();
            close.style.display = "none";
            menu.style.display = "block";
            menuOptions.style.display = "none";
            isMenuClicked = false;
        }
    });
    // Menu items can only be clicked when the screen size is at below 769. It also ensures tht menu is already clicked.
    document.querySelectorAll(".menu-options p").forEach(function (item) {
        item.addEventListener("click", function () {
            if (window.innerWidth <= 768) {
                menuOptions.style.display = "none";
                close.style.display = "none";
                menu.style.display = "block";
                isMenuClicked = false;
            }
        });
    });
    // When the screen size is at below 769 and when user clicks anywhere on the webpage except the menu option, menu option closes. 
    document.addEventListener("click", function (event) {
        if (window.innerWidth <= 768 && isMenuClicked && !menuOptions.contains(event.target) && !menu.contains(event.target) && !close.contains(event.target)) {
            menuOptions.style.display = "none";
            close.style.display = "none";
            menu.style.display = "block";
            isMenuClicked = false;
        }
    });
    // Whenever screen is reduced at below 769, user can click menu, close menu. 
    window.addEventListener("resize", function () {
        if (window.innerWidth <= 768) {
            menuOptions.style.display = "none";
            menu.style.display = "block";
            close.style.display = "none";
        } else {
            menuOptions.style.display = "flex"; 
            menu.style.display = "none";
            close.style.display = "none";
            isMenuClicked = false;
        }
    });
});
