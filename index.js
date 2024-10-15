const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false;
colorEl.value = "black";
let color = colorEl.value;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.beginPath(x1, y1);
  ctx.beginPath(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

const updateSizeOneScreen = () => {
  sizeEl.innerText = size;
};

increaseBtn.addEventListener("click", () => {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  updateSizeOneScreen();
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;
  if (size > 5) {
    size = 5;
  }
  updateSizeOneScreen();
});

colorEl.addEventListener("change", (e) => (color = e.target.value));
clearEl.addEventListener("click", (e) =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
