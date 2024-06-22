function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  let width = 30;
  let height = 30;
  const boxesArr = [];

  for (let i = 1; i <= amount; i++, width += 10, height += 10) {
    boxesArr.push(
      `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>`
    );
  }
  boxes.insertAdjacentHTML("beforeend", boxesArr.join(""));
  input.value = "";
};

const onCreateButtonClick = () => {
  const amount = parseInt(input.value);

  if (amount < 1 || amount > 100) {
    // alert("Вкажіть кількість елементів від 1 до 100");
    input.value = "";
    return;
  }

  createBoxes(amount);
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
  input.value = "";
};

createButton.addEventListener("click", onCreateButtonClick);
destroyButton.addEventListener("click", destroyBoxes);
// input.onchange = onCreateButtonClick;
