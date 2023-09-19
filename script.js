const timeDisplay = document.querySelector("#displayTimer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let mls = 0;

startBtn.addEventListener("click",()=>{
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1)
        
    }
});
pauseBtn.addEventListener("click",()=>{
    if (!paused) {
        paused = true;
        /* elapsedTime = Date.now() - startTime; */
        clearInterval(intervalId);
    }
    
});
resetBtn.addEventListener("click",()=>{
    paused = true;
    clearInterval(intervalId); 
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    mls = 0;
    timeDisplay.textContent = "00:00:00:00"
    
});

function updateTime() {
    elapsedTime = Date.now() - startTime;
    mls = Math.floor((elapsedTime)%60);
    secs = Math.floor((elapsedTime/1000)%60);
    mins = Math.floor((elapsedTime/(1000*60))%60);
    hrs = Math.floor((elapsedTime/(1000*60*60))%60);
    
    mls = pad(mls);
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}:${mls}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit
    }
}