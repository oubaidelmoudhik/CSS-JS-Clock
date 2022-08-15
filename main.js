const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegree = (seconds / 60) * 360 + 90;
  const minutesDegree = (minutes / 60) * 360 + 90;
  const hoursDegree = (hours / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
  console.log(seconds);
}

setInterval(setDate, 1000);
