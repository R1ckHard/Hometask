var flag = true;
const timer = setInterval(function() {
    const time = new Date();
    const hours = (time.getHours());
    const minutes = (time.getMinutes());
    const seconds = (time.getSeconds());
    if (flag) {
        document.getElementById('time').innerText = (`${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} `);
        flag = false;
    }
    else {
        document.getElementById('time').innerText = (`${hours < 10 ? '0' + hours : hours} ${minutes < 10 ? '0' + minutes : minutes} ${seconds < 10 ? '0' + seconds : seconds} `);
        flag = true;
    }
},500);