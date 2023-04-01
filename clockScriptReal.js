function displayTime(){
    var dateTime = new Date();
    var hour = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hour >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }
    
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);