var arr = [];
for (var i=0;i<100;i++){
    (function (x) {
        arr [x]=function (){
            alert(x);
        }
    })(i)
}
arr[73]();