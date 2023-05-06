const nav = document.querySelector('#nav-list');
const navToggle = document.querySelector('#nav-toggle');
const closeNav = document.querySelector('#nav-close');
const navLink = document.querySelectorAll('.nav-link');

function show() {
  nav.classList.toggle('active');
}

function hide() {
  nav.classList.toggle('active');
}

function removeClass() {
  nav.classList.remove('active');
}

navToggle.addEventListener('click', show);
closeNav.addEventListener('click', hide);

for (let i = 0; i <= navLink.length; i += 1) {
  navLink[i].addEventListener('click', removeClass);
}
