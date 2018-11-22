var contextMenu = document.getElementById('context-menu');
var liMenu = document.getElementById('menu').children;
function showMenu(x,y) {
    contextMenu.style.display = 'block';
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
}
document.addEventListener('contextmenu', function (event) {
    showMenu(event.clientX, event.clientY);
    event.preventDefault();
});
document.addEventListener('click',function () {
    contextMenu.style.display='none';
});
liMenu[0].addEventListener('click',function () {
    document.body.style.background="url('background/bananas.png')";
    document.body.style.color="";
});
liMenu[1].addEventListener('click',function () {
    document.body.style.background="url('background/leaves.png')";
    document.body.style.color="";
});
liMenu[2].addEventListener('click',function () {
    document.body.style.background = "url('background/ep_naturalblack.png')";
    document.body.style.color="#ffebc7";
    contextMenu.style.color = "black";
});
liMenu[3].addEventListener('click',function () {
    document.body.style.background = "";
    document.body.style.color="";
});