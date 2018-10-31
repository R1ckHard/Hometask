const timer = setInterval(function() {
        const time = new Date();
        const hours = (23-time.getHours());
        const minutes = (60-time.getMinutes());
        const seconds = (60-time.getSeconds());
        const timestr = (`До конца дня осталось - ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} `);
        document.getElementById('time').innerText = timestr;
        },500);
