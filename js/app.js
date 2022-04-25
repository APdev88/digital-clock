const hoursDisplay = document.getElementById("hours");
const minDisplay = document.getElementById("min");
const secDisplay = document.getElementById("sec");

let interval = setInterval(clock, 1000);

function clock() {
  const date = new Date();

  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hoursDisplay.innerHTML = hour;
  minDisplay.innerHTML = min;
  secDisplay.innerHTML = sec;

  if (sec < 10) {
    secDisplay.innerHTML = "0" + sec;
  }

  if (min < 10) {
    minDisplay.innerHTML = "0" + min;
  }

  if (hour < 10) {
    hourDisplay.innerHTML = "0" + hour;
  }
}
clock();
