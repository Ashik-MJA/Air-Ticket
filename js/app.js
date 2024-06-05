// header menu section
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hLink = document.querySelectorAll('#hLink');
// const faSolid = document.querySelector(".fa-bars");
const faSolid = document.querySelector("#header-bars");

hamburger.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    faSolid.classList.toggle('fa-xmark');
})
hLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        faSolid.classList.toggle('fa-xmark');
    })
})