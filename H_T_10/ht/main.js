var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.txt', true);
xhr.onload = function () {
    document.body.innerHTML = this.responseText;
    var nums = this.responseText.split(' ').map(n => +n);
    var avg = nums.reduce((p, c) => p + c) / num.length;
    var harm = nums.length / nums.reduce((p, c) => 1/c + p, 0);
    console.log('Среднее арифметическое: ' + avg.toFixed(2));
    console.log('Среднее гармоническое: ' + harm.toFixed(2));
};
xhr.send(null);