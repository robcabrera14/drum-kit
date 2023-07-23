const sounds = key => {
  switch (key) {
    case 'W':
      const tom1 = new Audio('/assets/sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'A':
      const tom2 = new Audio('/assets/sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'S':
      const tom3 = new Audio('/assets/sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'D':
      const tom4 = new Audio('/assets/sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'J':
      const snare = new Audio('/assets/sounds/snare.mp3');
      snare.play();
      break;
    case 'K':
      const kickBass = new Audio('/assets/sounds/kick-bass.mp3');
      kickBass.play();
      break;
    case 'L':
      const crash = new Audio('/assets/sounds/crash.mp3');
      crash.play();
      break;
    default:
      false;
  }
};

const animation = key => {
  const element = document.querySelector(`.${key.toLowerCase()}`);
  element.classList.add('animation');
  setTimeout(() => {
    element.classList.remove('animation');
  }, 100);
};

const drums = document.querySelectorAll('.drum');
let key = null;

// play sound if the drum button is clicked
drums.forEach(drum => {
  drum.addEventListener('click', e => {
    key = e.target.textContent;
    sounds(key);
    animation(key);
  });
});

// play sound if the drum button is pressed
document.addEventListener('keypress', e => {
  key = e.key.toUpperCase();
  sounds(key);
  animation(key);
});
