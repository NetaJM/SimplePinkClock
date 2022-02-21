

const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function setDate() {

  const currTime = new Date ();

const getSecond = currTime.getSeconds();
const getMinute = currTime.getMinutes();
const getHour = currTime.getHours();
  
  console.log(currTime);

// converting the times into degrees for the portion of the movements of each arrow 
const secondsInDegrees = (getSecond / 60) * 360;
const minutesInDegrees = (getMinute / 60) * 360;
const hoursInDegrees = (getHour / 60) * 360;

second.style.transform = `rotate(${secondsInDegrees}deg)`;
minute.style.transform = `rotate(${minutesInDegrees}deg)`;
hour.style.transform = `rotate(${hoursInDegrees}deg)`;


};

setInterval(setDate, 1000);

