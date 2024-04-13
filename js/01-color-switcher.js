let backgroundChanger = null;
const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeBackgroundColor() {
  let newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  console.log(newColor);
}
function startChangingBackground() {
  startButton.setAttribute("disabled", "");
  backgroundChanger = setInterval(changeBackgroundColor, 1000);
}
function stopChangingBackground() {
  clearInterval(backgroundChanger);
  startButton.removeAttribute("disabled");
}

startButton.addEventListener("click", startChangingBackground);
stopButton.addEventListener("click", stopChangingBackground);
