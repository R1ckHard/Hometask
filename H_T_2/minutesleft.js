var d = new Date();
var midnight = (1440);
var minInHours = d.getHours()*60;
var minutes = d.getMinutes();
alert((midnight-(minutes+minInHours))+' Минут осталось до конца дня');

//Вывести кол-во минут до конца текущего дня