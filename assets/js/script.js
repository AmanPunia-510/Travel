const toggle = document.querySelector(".toggle");
const navbar_items = document.querySelector(".navbar-items");

toggle.addEventListener("click", ()=> {
    navbar_items.classList.toggle("show");
    let body = document.querySelector("body");
    if (navbar_items.classList.contains("show")) {
        body.style.position = "fixed";
        body.style.top = "0";
        body.style.left = "0";
        body.style.width = "100%"
    }
    else {
        body.style.position = "relative";
    }
})