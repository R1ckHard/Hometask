const btnEnc = document.getElementById('encryption');
const btnDec = document.getElementById('decryption');
const text = document.getElementById('text');
const encryptedText = document.getElementById('encrypted');
const offset = 3;
btnEnc.addEventListener('click', function () {
    let arrOfLetters = text.value.split('');
    let encrypted = arrOfLetters.map((a) => String.fromCharCode(a.charCodeAt(0) + offset)).join('');
    encryptedText.value = encrypted;
});
btnDec.addEventListener('click', function () {
        let arrOfLetters = encrypted.value.split('');
        let decrypted = arrOfLetters.map((b) => String.fromCharCode(b.charCodeAt(0) - offset)).join('');
        text.value = decrypted;
    }
);



