"use strict"

var hr = 0
var min = 0
var sec = 0

var tempo = 100//quantos milésimos valem 1 segundo
var cron;

function star(){

    cron = setInterval(() => {timer();}, tempo)

}

function pause(){
    clearInterval(cron);
}

function stop(){
    clearInterval(cron)
    var hr = 0
    var min = 0
    var sec = 0

    document.getElementById('counter').innerText = "00:00:00"
}

function timer(){
    sec++;
    if(sec == 60){
        sec = 0
        min++

        if (min == 60 ) {
            min = 0;
            hr++;
        }
    }

    var format = (hr < 10 ? '0' + hr : hr) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? "0"+sec : sec);
    document.getElementById('counter').innerText = format
}