var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2-15; //Начальное положение шарика
var y = canvas.height/2;
var dx = 0;               //Вектора
var dy = 2;
var stickHeight = 15;    //Размер стиков
var stickWidth = 90;
var stickX1 = (canvas.width-stickWidth)/2-15; //Начальное положение стиков
var stickX2 = (canvas.width-stickWidth)/2-15;
var DPressed = false;
var APressed = false;
var EscPressed = false;
var rightPressed = false;
var leftPressed = false;
var score1 = 0;
var score2 = 0;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    if(e.keyCode == 27) {
        EscPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if(e.keyCode == 68) {
        DPressed = true;
    }else if(e.keyCode == 65) {
        APressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    if(e.keyCode == 27) {
        EscPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    else if(e.keyCode == 68) {
        DPressed = false;
    }else if(e.keyCode == 65) {
        APressed = false;
    }
}
function DrawBoard() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, 5);
    ctx.rect(0, canvas.height-5, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
function DrawBoard2() {
    ctx.beginPath();
    ctx.rect(0, 0, 5, canvas.height);
    ctx.rect(canvas.width-5, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle1() {
    ctx.beginPath();
    ctx.rect(stickX1, canvas.height-stickHeight, stickWidth, stickHeight);
    ctx.fillStyle = "#4b89ff";
    ctx.fill();
    ctx.closePath();
} function drawPaddle2() {
    ctx.beginPath();
    ctx.rect(stickX2, 0, stickWidth, stickHeight);
    ctx.fillStyle = "#4b89ff";
    ctx.fill();
    ctx.closePath();
}
function moveBall() {
    if ( x + dx < ballRadius||x + dx>canvas.width-ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius || y + dy-ballRadius < stickHeight) {
        if(x > stickX2 && x < stickX2 + stickWidth) {
            dy = -dy;
            dx =dx+(x- stickX2-stickWidth/2)/25;
        } else if(y + dy< ballRadius) {
            dy = -dy;
            alert('Player 2 scored a goal');
            score2++;
            rightPressed=false;  //после alert клавиши залипают и остаются true
            leftPressed=false;
            DPressed=false;
            APressed=false;
        }
    }
    if(y + dy + ballRadius > canvas.height-stickHeight) {
        if(x > stickX1 && x < stickX1 + stickWidth) {
            dy = -dy;
            dx =dx+(x- stickX1-stickWidth/2)/25;
        } else if(y+ dy> canvas.height) {
            dy = -dy;
            alert('Player 1 scored a goal');
            score1++;
            rightPressed=false;   //после alert клавиши залипают и остаются true
            leftPressed=false;
            DPressed=false;
            APressed=false;
        }
    }
    var maxscore = document.getElementById('score').value;
    if(score1 >= maxscore) {
        if( confirm('Player 1 Win!!! Play again?')) {
            score1=0;
            score2=0;
            document.location.reload();
        }
        else close();
    }
    if(score2 >= maxscore) {
        if( confirm('Player 2 Win!!! Play again?')) {
            score1=0;
            score2=0;
            document.location.reload();
        }
        else close();
    }
    var ballSpeed=document.getElementById('ballspeed').value ;
    x += dx;
    if (dy > 0)  {
        y += dy+2*ballSpeed;
    } else if (dy<0) {
        y += dy-2*ballSpeed;
    }
}
function movePaddle1() {
    var speed=4;
    if (rightPressed && stickX1 < canvas.width-stickWidth) {
        stickX1 += speed;
    }
    else if(leftPressed && stickX1 > 0) {
        stickX1 -= speed;
    }
}
function movePaddle2() {
    var speed=4;
    if (DPressed && stickX2 < canvas.width-stickWidth) {
        stickX2 += speed;
    }
    else if(APressed && stickX2 > 0) {
        stickX2 -= speed;
    }
}
function drawScore() {
    var maxscore = document.getElementById('score').value;
    ctx.font="Arial";
    ctx.fillStyle="black";
    ctx.font = "25px serif";
    ctx.fillText(`P2: ${score2}/${maxscore}`,canvas.width-80,canvas.height-20);
    ctx.fillText(`P1: ${score1}/${maxscore}`,canvas.width-80,canvas.height-canvas.height+30);
}
function pause(){
    if (EscPressed){
        EscPressed=false;
        alert( "Pause " )
    }
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle1();
    drawPaddle2();
    drawScore();
    DrawBoard ();
    DrawBoard2();
    moveBall();
    movePaddle1();
    movePaddle2();
    pause();
}
setInterval(draw, 10);