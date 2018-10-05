var a = +prompt('Введите а');
var b = +prompt('Введите b');
var c = prompt('Введите операцию знаком - /,*,+,-');
switch (c) {
    case '*':
        alert(a*b);
        break;
    case '/':
        alert(a/b);
        break;
    case '+':
        alert(a+b);
        break;
    case '-':
        alert(a-b);
        break;
    default:
        alert('Неверная операция');
}
