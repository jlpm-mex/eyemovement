const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i=0; i<2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }

};

const segundero = document.querySelector('.segundero');
const minutero  = document.querySelector('.minutero');
const hora      = document.querySelector('.hora');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  segundero.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minutero.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hora.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

const tail      = document.querySelector('.cattail');
let tailDegrees = 0;
const moveTail = () => {
  tailDegrees = tailDegrees === 20 ? 0 : 20;
  tail.style.transform = `rotate(${tailDegrees}deg)`;
}

setInterval(moveTail, 1000);

setDate();
