// selection from HTML
const section = document.querySelector(".section-center");
const daysContainer = document.querySelector(".days");
const hoursContainer = document.querySelector(".hours");
const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds");

let futureDate = new Date(2024, 0, 1, 0, 0, 0);

const futureDay = futureDate.getDay();
const futureHour = futureDate.getHours();
const futureMinute = futureDate.getMinutes();
const futureSecond = futureDate.getSeconds();

// future time in miliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // cal all value
  let days = t / oneDay;
  days = Math.floor(days);

  let hours = (t % oneDay) / oneHour;
  hours = Math.floor(hours);

  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  daysContainer.textContent = days;
  hoursContainer.textContent = hours;
  minutesContainer.textContent = minutes;
  secondsContainer.textContent = seconds;

  if (days < 10) {
    daysContainer.textContent = `0${days}`;
  }
  if (minutes < 10) {
    minutesContainer.textContent = `0${minutes}`;
  }
  if (hours < 10) {
    hoursContainer.textContent = `0${hours}`;
  }
  if (seconds < 10) {
    secondsContainer.textContent = `0${seconds}`;
  }

  if (t < 0) {
    clearInterval(countdown);
    section.innerHTML = `<h3 class="new-text">Happy new year!!!!!</h3>`;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
