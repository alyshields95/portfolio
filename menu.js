/*
 * Open the drawer when the menu ison is clicked.
 */
var menu = document.querySelector('#menu');
var menuClose = document.querySelector('#menuClose');
var main = document.querySelector('#page');
var drawer = document.querySelector('#drawer');
var header = document.querySelector('#masthead');

menu.addEventListener('click', function (e) {
    main.classList.toggle('open');
    drawer.classList.toggle('open');
    e.stopPropagation();
});
main.addEventListener('click', function () {
    drawer.classList.remove('open');
    main.classList.remove('open');
});

menuClose.addEventListener('click', function () {
    drawer.classList.remove('open');
    main.classList.remove('open');
});