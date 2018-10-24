var a=0;
var b =1;
var n = +prompt('vvedite n');
var num;
for (var i=0;i<n;i++){

    num =a+b;
    a=b;
    b=num;
    alert(num);
}
//Числа фибоначи