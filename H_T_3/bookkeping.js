const bookkeeping = {
    employees: [{
        name: 'Alex',
        age: 30,
        departments: 'Cleaning',
        salary: 24,
        experience: 21,
        print: function () {
            console.log(`Имя:${this.name}\nВозраст:${this.age}-\nОтдел:${this.departments}-\nЗарплата:${this.salary}\n`);
        }
    }, {
        name: 'Max',
        age: 23,
        departments: 'Development',
        salary: 86,
        experience: 28,
        print: function () {
            console.log(`Имя:${this.name}\nВозраст:${this.age}\nОтдел:${this.departments}\nЗарплата:${this.salary}\n`);
        }
    }, {
        name: 'Joe',
        age: 55,
        departments: 'Security',
        salary: 45,
        experience: 14,
        print: function () {
            console.log(`Имя:${this.name}\nВозраст:${this.age}-\nОтдел:${this.departments}\nЗарплата:${this.salary}\n`);
        }
    }, {
        name: 'Karl',
        age: 30,
        departments: 'Cleaning',
        salary: 20,
        experience: 13,
        print: function () {
            console.log(`Имя:${this.name}\nВозраст:${this.age}\nОтдел:${this.departments}\nЗарплата:${this.salary}\n`);
        }
    }, {
        name: 'Sasha',
        age: 28,
        departments: 'Development',
        salary: 56,
        experience: 31,
        print: function () {
            console.log(`Имя:${this.name}\nВозраст:${this.age}\nОтдел:${this.departments}\nЗарплата:${this.salary}\n`);
        }
    }, {
        name: 'John',
        age: 17,
        departments: 'Security',
        salary: 36,
        experience: 14,
        print: function () {
            console.log(`Имя:${this.name}\nВозраст:${this.age}\nОтдел:${this.departments}\nЗарплата:${this.salary}\n`);
        }
    }],
    printAll: function () {
        for (var i in this.employees) {
            this.employees[i].print()   ;
        }
    },
    deleted: function () {
        var uvolen = prompt("Кого турнем ,Босс?");
        for (var i = 0; i < this.employees.length; i++) {
            if (this.employees[i].name == uvolen) {
                this.employees.splice(i, 1);
                alert(uvolen + '-Уволен');
                break
            }
        }},
    nanimaem: function (imja, leT, otdel, Zp, exp) {
        this.employees.push({
            name: imja,
            age: leT,
            departments: otdel,
            salary: Zp,
            experience: exp,
            print: function () {
                console.log(`Имя:${this.name}\nВозраст:${this.age}\nОтдел:${this.departments}\nЗарплата:${this.salary}\n`);
            }
        })
    },
    summZp:function () {
        let summ=0;
        for( var i in this.employees){
            summ += this.employees[i].salary
        }
         console.log('Суммарная зарплата по всем людям ='+summ)

    },
    maxMinAwgZp:function () {
        var maxZp=(`Максимальная Зарплата ${this.employees[0].salary} у ${this.employees[0].name}`);
        var minZp=(`Минимальная Зарплата ${this.employees[this.employees.length-1].salary} у ${this.employees[this.employees.length-1].name}`);
        var awgZp = 0;
        for(var i=0;i<this.employees.length;i++){
        awgZp += this.employees[i].salary;
        }
        console.log("Средняя зп = ",awgZp/this.employees.length);
        console.log(maxZp + '\n'+ minZp);
        },
    ZpPoOtdelam:function () {
        let ZpDevelopment = [];
        let ZpSecurity =[];
        let ZpCleanings = [];
        let ageDev=[];
        let ageSec=[];
        let ageCle=[];
        for(var i in this.employees){
            if(this.employees[i].departments=='Development'){
                ZpDevelopment.push(this.employees[i].salary);
                ageDev.push(this.employees[i].age)
            }
            if(this.employees[i].departments=='Security'){
                ZpSecurity.push(this.employees[i].salary);
                ageSec.push(this.employees[i].age)
            }
            if(this.employees[i].departments=='Cleaning'){
                ZpCleanings.push(this.employees[i].salary);
                ageCle.push(this.employees[i].age)
            }
        };
        let sumZpDev = ZpDevelopment.reduce((a, b) => a + b, 0);
        let sumZpSec = ZpSecurity.reduce((a, b) => a + b, 0);
        let sumZpCle = ZpCleanings.reduce((a, b) => a + b, 0);
        let awgDev = ageDev.reduce((a, b) => a + b, 0)/ageDev.length;
        let awgSec = ageSec.reduce((a, b) => a + b, 0)/ageDev.length;
        let awgCle = ageCle.reduce((a, b) => a + b, 0)/ageDev.length;
        console.log(`Development:\nСуммарная з/п:${sumZpDev}\nСредняя зп:${sumZpDev/ZpDevelopment.length}\nСредний возраст:${awgDev}`);
        console.log(`Security:\nСуммарная з/п:${sumZpSec}\nСредняя зп:${sumZpSec/ZpSecurity.length}\nСредний возраст:${awgSec}`);
        console.log(`Cleanings:\nСуммарная з/п:${sumZpCle}\nСредняя зп:${sumZpCle/ZpCleanings.length}\nСредний возраст:${awgCle}`);
    }
};
bookkeeping.employees.sort((a, b)=>b.salary - a.salary);


bookkeeping.nanimaem('Ivan',20,'Development',1000,6);
bookkeeping.deleted();
bookkeeping.printAll();
bookkeeping.summZp();
bookkeeping.maxMinAwgZp();
bookkeeping.ZpPoOtdelam();