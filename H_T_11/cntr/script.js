var xhr = new XMLHttpRequest();
xhr.open('GET','cntr.csv',true);
xhr.onload = function () {
    var csvText = this.responseText;
    var lines = csvText.split('\n').map(el=>el.split(','));
    console.log(lines);
    function newtable () {
        var tbl = '<table style="background-color: moccasin; border-collapse: collapse;float: left"; collapse;cellpadding="5" cellspacing="5";"><tbody>';
        for(var i=0;i<lines.length-1;i++) {
            tbl += `<tr>`;
            for(var j = 0;j<lines[i].length;j++){
                tbl += `<td style="border: 1px solid black;
                            padding: 5px 5px;
                            font-size: larger";>
                        ${lines[i][j]}</td>`;
            }
            tbl += '</tr>';
        }
        tbl += '</tbody></table>';
        console.log(lines.length);
        document.write(tbl);
    };
    newtable();
};
xhr.send(null);

