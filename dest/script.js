"use strict";
const button1 = document.querySelector('.phone-btn');
button1.addEventListener("click", function () {
    if (button1) {
        const pmenu = document.querySelector('.phone-menu');
        if (pmenu.style.display === "block") {
            pmenu.style.display = "none";
        }
        else {
            pmenu.style.display = "block";
        }
    }
});
