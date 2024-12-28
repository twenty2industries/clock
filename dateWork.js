function showTime (){
    const now1 = new Date();
    const date = now1.getDate();
    const month = now1.getMonth() + +1;
    const year = now1.getFullYear();

    const clockElement = document.getElementById('dateWork');
    clockElement.textContent = `Tag:  ${date}. Monat:   ${month}. Jahr:   ${year}`;
}

setInterval(showTime, 0, 1000);

showTime();