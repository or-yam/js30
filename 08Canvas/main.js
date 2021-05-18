const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

const state = {
  isDrawing: false,
  lastPos: { x: 0, y: 0 },
  hue: 1
};

const draw = ({ offsetX, offsetY }) => {
  if (!state.isDrawing) return;
  const { x: lastX, y: lastY } = state.lastPos;
  ctx.strokeStyle = `hsl(${state.hue}, 100%, 50%)`;
  ctx.lineWidth = state.hue;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(offsetX, offsetY);
  ctx.stroke();
  state.hue = state.hue > 359 ? 1 : state.hue + 1;
  [state.lastPos.x, state.lastPos.y] = [offsetX, offsetY];
};

const onMouseDown = ({ offsetX, offsetY }) => {
  state.isDrawing = true;
  [state.lastPos.x, state.lastPos.y] = [offsetX, offsetY];
};

canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (state.isDrawing = false));
canvas.addEventListener('mouseout', () => (state.isDrawing = false));
