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

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-12338985-1', 'auto');
ga('send', 'pageview');

