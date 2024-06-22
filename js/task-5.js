function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChngClr = document.querySelector(".change-color");
const body = document.querySelector("body");

const chngBodyClr = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  document.querySelector(
    ".color"
  ).textContent = `hex(${color}), ${body.style.backgroundColor}`;
};

btnChngClr.addEventListener("click", chngBodyClr);
