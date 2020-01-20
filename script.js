const display = document.querySelector('.display');
const status = document.querySelector('.status')
//buttons
const workButton = document.querySelector('.work');
const breakButton = document.querySelector('.break');
const resetButton = document.querySelector('.reset');
const stopButton = document.querySelector('.stop');
const startButton = document.querySelector('.start');

let count = 1500;
let interval;
let minutes;
let seconds;
// phase 0 is work, phase 1 is break
let phase = 0

status.textContent = "WORK TIME"


function countdown() {
    count -= 1;
    minutes = ('00' + parseInt(count/60)).substr(-2);
    seconds = ('00' + count%60).substr(-2);
    display.textContent = minutes + ':'+seconds;
if (count == 0 && phase ==0){
    phase = 1;
    count = 1500;
    status.textContent = "BREAK TIME"
}
else if (count == 0 && phase == 1){
    phase = 0;
    count = 300;
    status.textContent = "WORK TIME"
}
}    


function timer(e) {
    if (e.target ==workButton) {
        clearInterval(interval)
        phase = 0
        count = 1500
        display.textContent = "25:00"
        status.textContent = "WORK TIME"
    }
    else if (e.target == breakButton){
        clearInterval(interval)
        phase = 1
        count =300
        display.textContent = "05:00"
        status.textContent = "BREAK TIME"
    }
    
   else if (e.target == startButton){
        interval = setInterval(countdown, 1000);}
}

function stopReset(e) {
clearInterval(interval);
if (e.target == resetButton) {
    if (phase == 0){
count = 1500;
display.textContent = "25:00"
}
else if (phase == 1){
    count = 300
    display.textContent = "05:00"
}
}
}
workButton.addEventListener('click', timer);
breakButton.addEventListener('click', timer);
startButton.addEventListener('click', timer);
stopButton.addEventListener('click', stopReset);
resetButton.addEventListener('click', stopReset);




