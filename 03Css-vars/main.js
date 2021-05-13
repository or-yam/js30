const updateValue = ({ target }) => {
  const { name, value } = target;
  document.documentElement.style.setProperty(`--${name}`, name === 'color' ? value : `${value}px`);
};

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('change', updateValue);
  input.addEventListener('mousemove', updateValue);
});
