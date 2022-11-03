let menu = document.getElementById('menu');
let action = document.getElementById('action');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    action.classList.toggle('is-active');
});
