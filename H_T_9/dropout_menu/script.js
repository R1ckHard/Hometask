const menu = document.querySelector('.menu');
menu.addEventListener('click', function(event) {
    let open = event.target.parentNode.children[1];
    open.classList.toggle('visible');
});
menu.addEventListener('focusout', function(event) {
    let open = event.target.parentNode.children[1];
    open.classList.remove('visible');
});