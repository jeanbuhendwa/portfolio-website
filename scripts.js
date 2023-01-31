let nav = document.querySelector("#nav-list");
let navToggle = document.querySelector("#nav-toggle");
let closeNav = document.querySelector("#nav-close");
let navLink = document.querySelectorAll(".nav-link");

function show(){
    nav.classList.toggle("active");
}

function hide(){
    nav.classList.toggle("active");
}

function removeClass(){
    nav.classList.remove("active");
}

navToggle.addEventListener('click', show);
closeNav.addEventListener('click', hide);

for (let i = 0; i <= navLink.length; i++){
    navLink[i].addEventListener("click", removeClass);
}