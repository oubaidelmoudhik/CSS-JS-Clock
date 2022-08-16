//Select our three divs elements that we want to manipulate
const secondHand = document.getElementById("second-hand");
const minHand = document.getElementById(`min-hand`);
const hourHand = document.getElementById("hour-hand");

let setTime = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const secDegree = (seconds / 60) * 360 + 90; //We add 90 to compensate the 90 added in CSS
  const minDegree = (minutes / 60) * 360 + 90;
  const hourDegree = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secDegree}deg)`;
  minHand.style.transform = `rotate(${minDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  console.log(seconds);
};
// Set the function setDate to run every 1sec = 1000ms, !!!WITHOUT ()!!!
setInterval(setTime, 1000);
