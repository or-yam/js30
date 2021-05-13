const minHand = document.getElementById('min');
const secHand = document.getElementById('sec');
const hourHand = document.getElementById('hour');

const setTime = () => {
  const now = new Date();
  minHand.style.transform = `rotate(${now.getMinutes() * 6}deg)`;
  secHand.style.transform = `rotate(${now.getSeconds() * 6}deg)`;
  hourHand.style.transform = `rotate(${now.getHours() * 30}deg)`;
};

setInterval(() => {
  setTime();
}, 1000);
