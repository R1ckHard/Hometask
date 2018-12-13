const selection = document.getElementById('selection');
const lineWidth = document.getElementById('lineWidth');
const canvas = document.getElementById('canvas');
const btn = document.getElementById('btn');
const ctx = canvas.getContext('2d');
let draw = false;
let x, y;
const values = {
    blue: 'blue',
    black: 'black',
    green: 'green',
    red: 'red',
    random: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}

canvas.addEventListener("mousedown", function (e) {
    x = e.pageX - this.offsetLeft;
    y = e.pageY - this.offsetTop;
    draw = true;
    ctx.beginPath();
    ctx.moveTo(x, y);
});
canvas.addEventListener("mousemove", function (e) {
    x = e.pageX - this.offsetLeft;
    y = e.pageY - this.offsetTop;
    let chcolor;
    let color = selection.options[selection.selectedIndex].value;
    chcolor = values[color];
    ctx.strokeStyle = `${chcolor}`;
    let width = lineWidth.value;
    // if (x >= canvas.width || x <= 0 || y <= 0 || y>= canvas.height) {
    //     ctx.closePath();
    //     draw = false;
    // }
    if (draw == true) {
        ctx.lineWidth = width;
        ctx.lineTo(x, y);
        ctx.stroke();
    }
});
document.addEventListener("mouseup", function () {
    ctx.closePath();
    draw = false;
});
btn.addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
});
