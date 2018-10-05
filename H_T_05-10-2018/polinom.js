var n = +prompt("vvedite n");
var x = +prompt("vvedite x");
var arr = [n];
for (var i=0;i<n;i++)
{
    arr[i]=Number(prompt("vvedite "+(i+1)+" 4len"));
}
var sum = 0;
for (var i=0;i<n;i++) {
    sum=sum+arr[n-i-1]*(x**i);
}
alert(sum);
