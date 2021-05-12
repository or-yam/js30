const boomSound = new Audio('./sounds/boom.wav');
const clapSound = new Audio('./sounds/clap.wav');
const hihatSound = new Audio('./sounds/hihat.wav');
const kickSound = new Audio('./sounds/kick.wav');
const openhatSound = new Audio('./sounds/openhat.wav');
const rideSound = new Audio('./sounds/ride.wav');
const snareSound = new Audio('./sounds/snare.wav');
const tinkSound = new Audio('./sounds/tink.wav');
const tomSound = new Audio('./sounds/tom.wav');

const playSound = (sound, id) => {
  const pad = document.getElementById(id);
  sound.play();
  pad.classList.add('playing');
  setTimeout(() => {
    sound.pause();
    sound.currentTime = 0;
    pad.classList.remove('playing');
  }, 100);
};

document.addEventListener('keydown', ({ code }) => {
  const key = code.slice(3);
  switch (key) {
    case 'A':
      playSound(clapSound, 1);
      break;
    case 'S':
      playSound(hihatSound, 2);
      break;
    case 'D':
      playSound(kickSound, 3);
      break;
    case 'F':
      playSound(openhatSound, 4);
      break;
    case 'G':
      playSound(boomSound, 5);
      break;
    case 'H':
      playSound(rideSound, 6);
      break;
    case 'J':
      playSound(snareSound, 7);
      break;
    case 'K':
      playSound(tomSound, 8);
      break;
    case 'L':
      playSound(tinkSound, 9);
      break;
  }
});
