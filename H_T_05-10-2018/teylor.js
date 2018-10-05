var x = +prompt("Enter x");
var n = +prompt("Enter N");
function fact(n)
{
    if (n==1||n==0)
        return 1;
    return n*fact(n-1);
}
var sum = 0;
for (var i=0;i<n;i++)
{
    {
        sum=sum+fact(2*n)/((4**n)*(fact(n)**2)*(2*n+1))*(x**(2*n+1));
    }
}
alert(sum);