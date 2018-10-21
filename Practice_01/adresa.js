const str = ('asdweyfg@gmail.com , asdfffbfcfbg@gmail.com , zcvbnbxfdvc@gmail.com , +375291233445 ,  zxcvsdfsdba@mail.ru , poiuyt@yandex.ru , mnbdsfsdfsdvcx@mail.ru , Imja ,2281488 , kjhgfds@yandex.ru , bcsdfsdfsdgdgh@gmail.com , jhgsdfsdfsdfdsfds@gmail.com , botnatyt@yandex.ru ');
const emails = str.split(',').map(s=>s.trim()).filter((s=>(s.match(/^.{2,}@[A-Za-z]+\.[a-z]{2,3}/))));
const operators =[];
emails.forEach(email=>{
    let operator = email.split('@')[1];
    if (operator.indexOf(operator)!=-1){
        operators.push(operator);
    }
});
var g=0,m=0,y=0;
operators.forEach (i=>{
    i=='gmail.com'?g++:g;
    i=='mail.ru'?m++:m;
    i=='yandex.ru'?y++:y;
});
const sortirovka={
    imena:[{name:'Гугл',
        kol_vo:g,
        naconsol:function () {
            console.log(`${this.name}-${this.kol_vo}`)
        }
    },{
        name:'Мыло',
        kol_vo:m,
        naconsol:function () {
            console.log(`${this.name}-${this.kol_vo}`)
        }
    },{
        name:'Яндекс',
        kol_vo:y,
        naconsol:function () {
            console.log(`${this.name}-${this.kol_vo}`)
        },
    }],
    printImena:function () {
        for(var i in this.imena){
            this.imena[i].naconsol()
        }
    },
};
sortirovka.imena.sort(function (a, b) {
    return b.kol_vo - a.kol_vo;
});
const adresa =[];
emails.forEach(s=>{
    let adrs = s.match(/^\w+[^@]/);
    adresa.push(adrs)
});
const dlinaMail=[];
const dlinaGmail=[];
const dlinaYandex=[];

adresa.forEach(s=>{
    let dln=s[0].length;
    if(s.input.match(/@mail\.ru/)){
        dlinaMail.push(dln)
    }
    if(s.input.match(/@gmail\.com/)){
        dlinaGmail.push(dln)
    }
    if(s.input.match(/@yandex\.ru/)){
        dlinaYandex.push(dln)
    }
});

const minMath = function (arr) {
    return Math.min.apply(Math, arr);
};
const maxMath = function (arr) {
    return Math.max.apply(Math, arr);
};
const avgMath = function (arr){
    let summ = arr.reduce((sum,curr)=>(sum+curr));
    return (summ /arr.length).toFixed(2);
};

sortirovka.printImena(); //По кол-ву оперов
//console.log(operators); //Все опера
//console.log(adresa);
//console.log(emails); //Массив адресов
//console.log(dlinaMail,dlinaGmail,dlinaYandex); //Все длины
//console.log('Max,min,Awg длины адресов mail.ru:' + maxMath(dlinaMail),minMath(dlinaMail),avgMath(dlinaMail));
//console.log('Max,min,Awg длины адресов gmail.com:' + maxMath(dlinaGmail),minMath(dlinaGmail),avgMath(dlinaGmail));
//console.log('Max,min,Awg длины адресов yandex.ru:' + maxMath(dlinaYandex),minMath(dlinaYandex),avgMath(dlinaYandex));