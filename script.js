const btnStart = document.getElementById('btn-start');
const btnDecrease = document.getElementById('btn-decrease');

let duration = 0;
let timerInterval;

btnStart.addEventListener('click', () => {
  const hours = document.getElementById('hour');
  const minutes = document.getElementById('minute');
  const seconds = document.getElementById('second');

  const additionalTime = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60) + parseInt(seconds.value);

  if (!timerInterval) {
    console.log("deu falso no if");
    duration = additionalTime;
    timer();
  } else {
    console.log("deu verdade no if");
    // Adiciona o tempo adicional ao tempo atual
    duration += additionalTime;
  }
});

btnDecrease.addEventListener('click', () => {
  const hours = document.getElementById('hour');
  const minutes = document.getElementById('minute');
  const seconds = document.getElementById('second');

  const decreaseTime = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60) + parseInt(seconds.value);

  duration = Math.max(duration - decreaseTime, 0); // Garante que a duração nunca seja negativa

});

const timer = () => {
  let display = document.getElementById('timer');

  timerInterval = setInterval(() => {
    let hours = Math.floor((duration / 60) / 60);
    let minutes = Math.floor(duration / 60 - (hours * 60));
    let seconds = Math.floor(duration % 60);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.innerHTML = `${hours}:${minutes}:${seconds}`;

    duration--;

    if (duration < 0) {
      display.innerHTML = 'ACABOU!!!';
      clearInterval(timerInterval);
      timerInterval = null; // Reset timerInterval after it finishes
    }
  }, 1000);
};
