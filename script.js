const palyIcn = document.querySelector(".btn1");
const pauseIcn = document.querySelector(".btn2");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".btn3");
const circle = document.querySelector(".circle")
const timeDisplay = document.querySelector(".time");

// timeDisplay.style.color = "#00ffcc";
// timeDisplay.style.fontSize = "29px";
// timeDisplay.style.fontFamily = "monospace";

let seconds = 0;
let timer = null;

function updateTime() {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = Math.floor(seconds % 60);

  timeDisplay.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

playBtn.addEventListener("click", () => {
  circle.style.animationPlayState = "running";

  timer = setInterval(() => {
    seconds++;
    updateTime();
  }, 1000);

  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
});

pauseBtn.addEventListener("click", () => {
  circle.style.animationPlayState = "paused";
  clearInterval(timer);

  pauseBtn.style.display = "none";
  playBtn.style.display = "inline-block";
});

resetBtn.addEventListener("click", () => {
   clearInterval(timer);
  timer = null;

  seconds = 0;
  updateTime();

  circle.style.animationPlayState = "paused";

  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
});

