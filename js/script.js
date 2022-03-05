const lights = document.querySelectorAll('.light');
const btn_normal = document.getElementById('btn-normal');
const btn_night = document.getElementById('btn-night');

let intervalFlashingYellow;

const timeGR = 2000;
const timeYellow = 1000;
const timeFlashingYellow = 500;

function changeLight(idx) {
  if (!btn_night.disabled) {
    if (idx === 0) {
      red();
    } else if (idx === 1) {
      yellow();
    } else {
      green();
    }
  }
}

function red() {
  lights[0].classList.add('active');
  setTimeout(() => {
    removeColor();
    changeLight(2);
  }, timeGR);
}

function yellow() {
  lights[1].classList.add('active');
  setTimeout(() => {
    removeColor();
    changeLight(0);
  }, timeYellow);
}

function green() {
  lights[2].classList.add('active');
  setTimeout(() => {
    removeColor();
    changeLight(1);
  }, timeGR);
}

function flashingYellow() {
  lights[1].classList.toggle('active');
}

function removeColor() {
  lights.forEach((light) => light.classList.remove('active'));
}

btn_normal.addEventListener('click', () => {
  btn_normal.disabled = true;
  btn_night.disabled = false;
  removeColor();
  clearInterval(intervalFlashingYellow);
  red();
});

btn_night.addEventListener('click', () => {
  btn_night.disabled = true;
  btn_normal.disabled = false;
  removeColor();
  intervalFlashingYellow = setInterval(flashingYellow, timeFlashingYellow);
});
