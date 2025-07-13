document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector(".hamburger-menu");
    var close = document.querySelector(".close-menu");
    var menuOptions = document.querySelector(".menu-options");
    menu.addEventListener("click", function () {
        close.style.display = "block";
        menu.style.display = "none";
        menuOptions.style.display = "block";
    });
    close.addEventListener("click", function () {
        close.style.display = "none";
        menu.style.display = "block";
        menuOptions.style.display = "none"; 
    });
    document.querySelectorAll(".menu-options p").forEach(function(item) {
        item.addEventListener("click", function() {
            menuOptions.style.display = "none";
            close.style.display = "none";
            menu.style.display = "block";
        });
    });
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