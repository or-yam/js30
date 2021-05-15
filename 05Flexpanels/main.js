const panels = document.querySelectorAll('.panel');

const togglePanelSelected = e => {
  const panel = panels[e.currentTarget.id - 1];
  panel.classList.toggle('open');
};

const toggleActive = e => {
  const panel = panels[e.currentTarget.id - 1];
  e.propertyName.includes('flex') && panel.classList.toggle('open-active');
};

panels.forEach(pan => pan.addEventListener('click', togglePanelSelected));
panels.forEach(pan => pan.addEventListener('transitionend', toggleActive));
