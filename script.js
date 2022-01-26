setInterval(() => {
    dt = new Date();
    hrtime = dt.getHours();
    mintime = dt.getMinutes();
    sectime = dt.getSeconds();
    hrrotation = hrtime*30 + mintime/2;
    minrotation = 6*mintime + sectime/10;
    secrotation = 6*sectime;
    hour.style.transform = `rotate(${hrrotation}deg)`
    minute.style.transform = `rotate(${minrotation}deg)`
    second.style.transform = `rotate(${secrotation}deg)`
}, 1000);