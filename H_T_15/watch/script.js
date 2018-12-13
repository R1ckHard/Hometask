function clockDrawing() {
    var data = new Date();
    var sec =data.getSeconds();
    var min = data.getMinutes();
    var hr = data.getHours();

    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.save();

    ctx.clearRect(0,0,300,300);
    ctx.translate(150,150);
    ctx.scale(0.4,0.4);
    ctx.rotate(-Math.PI/2);

    ctx.strokeStyle = "black";
    ctx.fillStyle = "green";
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.save();
    ctx.beginPath();
    ctx.arc(0,0,260,0,2*Math.PI);

    for (var i = 0; i < 12; i++) {
        ctx.rotate(Math.PI/6);
        ctx.moveTo(200,0);
        ctx.lineTo(240,0);
    }

    ctx.stroke();

    ctx.restore();

    ctx.save();

    ctx.rotate((Math.PI/6)*hr +
        (Math.PI/360)*min +
        (Math.PI/21600)*sec);
    
    ctx.lineWidth = 14;

    ctx.beginPath();
    ctx.moveTo(-40,0);

    ctx.lineTo(120,0);
    ctx.stroke();
    ctx.restore();

    ctx.save();

    ctx.rotate((Math.PI/30*min) +
        (Math.PI/1800)*sec);
    ctx.lineWidth = 10;

    ctx.beginPath();
    ctx.moveTo(-56,0);
    ctx.lineTo(200,0);
    ctx.stroke();
    ctx.restore();

    ctx.save();


    ctx.rotate(sec * Math.PI/30);
    ctx.strokeStyle = "#D40000";
    ctx.lineWidth = 6;

    ctx.beginPath();
    ctx.moveTo(-60,0);
    ctx.lineTo(166,0);
    ctx.stroke();
    ctx.restore();

    ctx.restore();
}
window.onload = function() {
    setInterval(clockDrawing, 1000);
};
clockDrawing();