function displayTime(){
    var dateTime = new Date();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');
    
    if(min >= 12&&min<=23){
        min = min - 12;
        session.innerHTML = "PM"
    }else if(min>=24&&min<=35){
        min = min -24;
        session.innerHTML = "AM"
    }else if(min>=36&&min<=47){
        min = min - 36;
        session.innerHTML = "PM"
    }else if(min>=48&&min<=59){
        min = min - 48;
        session.innerHTML = "AM"
    }


    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);