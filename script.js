const palyIcn = document.querySelector(".btn1");
const pauseIcn = document.querySelector(".btn2");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".btn3");
const dot = document.querySelector(".dot");
const timeDisplay = document.querySelector(".circle h1");

timeDisplay.style.color = "#00ffcc";
timeDisplay.style.fontSize = "29px";
timeDisplay.style.fontFamily = "monospace";

let seconds = 0;
let timer = null;

function updateTime() {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = Math.floor(seconds % 60)

    timeDisplay.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`          
};

playBtn.addEventListener("click", () => {
    dot.style.animation = "rotateDot 1s linear infinite"

    timer = setInterval(() => {
        seconds++;
        updateTime();
    }, 1000);

    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
});

pauseBtn.addEventListener("click", () => {
    dot.style.animation = "none";
    clearInterval(timer);

     pauseBtn.style.display = "none";
    playBtn.style.display = "inline-block";
});

resetBtn.addEventListener("click", () => {
    dot.style.animation = "none";
    clearInterval(timer);
    seconds = 0;
    updateTime();

    playBtn.style.display = "inline-block";
    pauseBtn.style.display = "none"
});