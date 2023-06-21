
let menu =document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('nav-toggle');

});
