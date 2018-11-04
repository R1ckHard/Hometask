const rows = +prompt('Введите кол-во рядов:');
const cols = +prompt('Введите кол-во колонок:');

function newtable() {
    let tbl = '<table align="center"><tbody>';
    for (let i = 0; i < rows; ++i) {
        tbl += '<tr>';
        for (let j = 0; j < cols; ++j) {
            tbl += '<td></td>';
        }
        tbl += '</tr>';
    }
    tbl += '</table></tbody>';
    document.write(tbl);
}

function child(f) {
    let table = document.querySelector('table').firstChild;
    let row = table.children;
    for (let i = 0; i < row.length; ++i) {
        let cols = row[i].children;
        for (var j = 0; j < cols.length; ++j) {
            f(cols[j]);
        }
    }
}
function hovered() {
    child(function(el) {
        el.addEventListener('mouseover', function makeHover() {
            let color = this.style.backgroundColor = 'Red';
            let timer = setTimeout(() => this.style.backgroundColor = 'White', 3000);
        });
    })
}
newtable();
hovered();
