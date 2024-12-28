function clockWork () {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0')

    // Drehwinkel muss erst nun für die Motion berechnet werden um diese dann
    // in der nachfolgenden Zeigerdrehfunktion implementiert werden kann

    const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;
    const minutesAngle = minutes * 6;
    const secondsAngle = seconds * 6;

    // jetzt wird die aufgestellte Formel benutzt um das Ticken zu spawnen
    
    //di 
    document.getElementById('hourHand').style.transform = `rotate(${hourAngle}deg)`;
    document.getElementById('minuteHand').style.transform = `rotate(${minutesAngle}deg)`;
    document.getElementById('secondHand').style.transform = `rotate(${secondsAngle}deg)`;


    const clockElement = document.getElementById('clock');
    clockElement.textContent=`${hours}:${minutes}:${seconds}`; 

}



setInterval(clockWork, 0, 1000);

clockWork ();
