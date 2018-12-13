const loadFile = document.getElementById('file');
const negative = document.getElementById('negative');
const sepia = document.getElementById('sepia');
const rotate = document.getElementById('hue-rotate');
const canvas = document.getElementById('img-field');
const ctx = canvas.getContext('2d');
const image = document.getElementById('img');
const src = image.src;
const saturate = document.getElementById('saturate');
const normal = document.getElementById('normal');

function readFile(file) {
    var pic = new FileReader();
    pic.onload = function () {
        image.src = this.result;
        image.onload = function () {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);//Промисы и авейт
        };
        console.log(image);
    };
    pic.readAsDataURL(file);

}

canvas.addEventListener("dragover", function (e) {
    e.preventDefault();
});
canvas.addEventListener("drop", function (e) {
    e.preventDefault();
    console.log(e.dataTransfer.files[0]);
    readFile(e.dataTransfer.files[0]);

});
loadFile.addEventListener('change', function () {
    readFile(this.files[0])
});


negative.addEventListener('click', function () {
    ctx.filter = 'invert(1)';
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
});

rotate.addEventListener('click', function () {
    ctx.filter = 'hue-rotate(90deg)';
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
});

sepia.addEventListener('click', function () {
    ctx.filter = 'sepia(1)';
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
});

saturate.addEventListener('click', function () {
    ctx.filter = 'saturate(50%)';
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
});








