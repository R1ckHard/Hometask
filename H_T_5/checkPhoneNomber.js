    const str = prompt('Введите номер');
    const nom = str.replace(/\s+/g, '');
    const check = /\+375[0-9]{9}/;

    if (nom.match(check)){
        alert('Номер введен верно');
       }
    else {
        alert('Номер введен неверно')
    }