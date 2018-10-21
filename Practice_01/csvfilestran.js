var csv = ('nameRus,nameEng,lang,population,area,city,time,cash,' +
    '\nАвстрия,Austria,deuch,8000,83,Wien,01:00,1000' +
    '\nБеларусь,Belarus,brus,10000,207,Minsk,03:00,300' +
    '\nРоссия,Russia,rus,147000,17100,Moscow,04:00,500' +
    '\nГермания,Germany,deuch,82700,357,Berlin,00:00,1500');
const arrcvs = csv.split('\n').splice(1,(csv.length-1)).map(x=>{
    let parts = x.split(",");
    return {
        rusTitle: parts[0],
        enTitle: parts[1],
        lang: parts[2],
        population:parts[3],
        area:parts[4],
        capital:parts[5],
        time:parts[6],
        cash:parts[7],
    }
});
console.log(arrcvs);
const desnity = arrcvs.sort((a,b)=>(b.population/b.area)-(a.population/a.area));
const vvp = arrcvs.sort((a,b)=>(b.population*b.cash)-(a.population*a.cash));

console.log('Максимальная плотность населения -'+desnity[0].rusTitle,(desnity[0].population/desnity[0].area).toFixed(2));
console.log('Минимальная плотность населения -'+desnity[desnity.length-1].rusTitle,(desnity[desnity.length-1].population/desnity[desnity.length-1].area).toFixed(2));
console.log('Максимальное ВВП -'+vvp[0].rusTitle,(vvp[0].population*desnity[0].cash).toFixed(2));
console.log('Минимальное ВВП -'+vvp[vvp.length-1].rusTitle,(vvp[vvp.length-1].population*desnity[vvp.length-1].cash).toFixed(2));