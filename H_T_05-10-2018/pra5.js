var numbers =1;
var count=0;
var a;
for (var i =0;i<4;i++){
    a = +prompt(' ');
    numbers *= a ;
    ++count;
}
var result=numbers**(1/count);
alert(result);