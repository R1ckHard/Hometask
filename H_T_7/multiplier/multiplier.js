var size=+prompt("Введите размерность таблицы");
var row, cell;
var tab = document.getElementById("tab");
for (var i=0;i<size;i++) {
    row = tab.insertRow(i);
    for (var j = 0; j < size; j++) {

        if (j == 0) {
            cell = row.appendChild(document.createElement("td"));
            cell.innerHTML = i + 1;
        }
        else {
            cell = row.insertCell(j);
            cell.innerHTML = (j + 1) * (i + 1);
        }
        if (i == j) cell.style.backgroundColor = "red";
    }
}