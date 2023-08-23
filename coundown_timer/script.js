const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');

const championsLeague = '11 Jun 2026';

function countdown() {
    const championsLeagueDate = new Date(championsLeague);
    const currentDate = new Date();

    const totalseconds = (championsLeagueDate - currentDate)/1000; // divided by 1000ms = 1 sec
   
    const days = Math.floor(totalseconds/3600/24); //rounds and give the largest integer less than or equals to
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours); 

    minsE1.innerHTML = formatTime(mins);
    secondsE1.innerHTML = formatTime(seconds);

    function formatTime(time){
        return time < 10 ? (`0${time}` ) : time;
    }
    //  The formatTime function is used to add a leading zero to the time if it is less than 10.
}

countdown();

setInterval(countdown, 1000); //here 1000ms = 1 sec
// after every 1 sec the countdown function is called