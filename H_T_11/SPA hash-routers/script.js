const Routes = {
    '#home': {
        path: 'html/home.html',
        handler:function () {

        }
    },
    '#test':{
        path: 'html/test.html',
        handler:function () {
            const checkField = document.getElementById('check1');
            const checkAnime = document.getElementById('check2');
            checkAnime.addEventListener('click',function () {
                switch (checkField.value) {
                    case 'Naruto':
                    case 'Fairy Tail':
                    case 'One Piece':
                    case 'Dead Note':
                        alert("Да вы казуал");
                        break;
                    case "Monogatari":
                    case "JoJo":
                    case "Code Geas":
                    case 'GTO':
                        alert('Вау а вы не так просты');
                        break;
                    case '':
                        alert('Вы ничего не ввели =/');
                        break;
                    default:
                        alert('Ну наверное сойдет');
                    
                }
            });

            const kickHim = document.getElementById('check3');
            kickHim.addEventListener('click',function () {
                if(confirm('Катись отсюда!Тебе здесь не рады!')){
                    document.location.href = "http://www.google.com";
                }
                else {
                    alert('Ну ладно можешь остаться.');
                    alert('Шутка!');
                    document.location.href = "http://www.google.com";
                }

            });

        }
    },
    '#music': {
        path: 'html/music.html',
        handler: function () {

        }
    },
    '#search':{
        path: 'html/search.html',
        handler:function () {
            const btnSearch = document.getElementById('search_btn');
            btnSearch.addEventListener('click',function () {
                alert('А у нас пока ничего и нету =(')
            });
        }
    },
    '#blank':{
        path: 'html/registration.html',
        handler:function () {
            const btn2 = document.getElementById('registration_btn');
            const btn1= document.getElementById('log_in');
            btn2.addEventListener('click',function () {
                alert('Регистрация временно недоступна!')
            });
            btn1.addEventListener('click',function () {
        alert('Вход временно недоступен!');
    })}
    },
};
function refreshConteiner() {
    const hash=location.hash;
    if(hash in Routes){
        const path = Routes[hash].path;
        const xhr=new XMLHttpRequest();
        xhr.open('GET',path,true);
        xhr.onload = function () {
            onPageLoaded(this.responseText,hash);
        };
        xhr.send(null);
    }
};
function onPageLoaded(text,hash) {
    const div = document.getElementById('container');
    div.innerHTML = text;
    if(typeof Routes[hash].handler == "function" ){
        Routes[hash].handler();
    }
}
window.onhashchange = refreshConteiner;
refreshConteiner();