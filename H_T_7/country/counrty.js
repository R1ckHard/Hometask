var country=[
    {
        name:"Belarus",
        flag:"img/Belarus.png",
        code:375,
        population:9.5
    },
    {
        name:"Russia",
        flag:"img/Russia.png",
        code:7,
        population:147
    },
    {
        name:"Ukraine",
        flag:"img/Ukraine.png",
        code:380,
        population:45
    },
    {
        name:"Poland",
        flag:"img/Poland.png",
        code:48,
        population:38.6
    },{
        name:"Germany",
        flag:"img/Germany.png",
        code:49,
        population:83
    },
    {
        name:"Lithuania",
        flag:"img/Lithuania.png",
        code:370,
        population:2.8
    },{
        name:"China",
        flag:"img/China.png",
        code:7,
        population:1386
    },
    {
        name:"Latvia",
        flag:"img/Latvia.png",
        code:371,
        population:2.1
    },
    {
        name:"Estonia",
        flag:"img/Estonia.png",
        code:372,
        population:1.3
    },
    {
        name:"Kazakhstan",
        flag:"img/Kazakhstan.png",
        code:7,
        population:18
    },
    {
        name:"France",
        flag:"img/France.png",
        code:33,
        population:67
    }];
var li, key=[];
for (var i in country){
    var ul=document.createElement('ul');
    document.body.appendChild(ul);
    li=document.createElement('li');
    li.innerHTML=country[i].name;
    ul.appendChild(li);
    key=Object.keys(country[i]);
    li.innerHTML='<hr>';
    for (var j=1;j<4;j++){
        if(key[j]=="code"){name
            var l=document.createElement('li');
            l.innerHTML=`Код страны: ${+country[i].code} `;
            li.appendChild(l);
        }
        if(key[j]=="population"){
            var l=document.createElement('li');
            l.innerHTML=`Население страны: ${+country[i].population} млн.`;
            li.appendChild(l);
        }
        if(key[j]=="flag"){
            var l=document.createElement('li');
            var pic = document.createElement("IMG");
            pic.src = country[i].flag;
            l.appendChild(pic);
            li.appendChild(l);
        }
    }

}
