const root = document.documentElement;

root.style.setProperty('--color', '#ff5500');
root.style.setProperty('--spacing', '95px');
root.style.setProperty('--blur', '12px');

const setColor = e => {
  root.style.setProperty('--color', e.target.value);
};

const setSpacing = e => {
  root.style.setProperty('--spacing', `${e.target.value}px`);
};

const setBlur = e => {
  root.style.setProperty('--blur', `${e.target.value}px`);
};

const colorInput = document.getElementById('color');
const spacingInput = document.getElementById('spacing');
const blurInput = document.getElementById('blur');

colorInput.addEventListener('change', setColor);
spacingInput.addEventListener('change', setSpacing);
blurInput.addEventListener('change', setBlur);
