//Selectors & Variables
const counter = getElement("counter");
const start = getElement("start");
const reset = getElement("reset");
const stop = getElement("stop");
const increase = getElement("increase");
const decrease = getElement("decrease");
let count = 0;

//Event Listeners
start.addEventListener("click", startCounter);
reset.addEventListener("click", resetCounter);
stop.addEventListener("click", stopCounter);
increase.addEventListener("click", increaseCounter);
decrease.addEventListener("click", decreaseCounter);

//Functions

//function to get element
function getElement(element) {
  return document.getElementById(element);
}

//function to start counter
function startCounter() {
  inter = setInterval(() => {
    counter.innerText = ++count;
  }, 1000);
}

//function to stop counter
function stopCounter() {
  clearInterval(inter);
}

//function to reset counter
function resetCounter() {
  clearInterval(inter);
  count = 0;
  counter.innerText = count;
}

// function to increase counter
function increaseCounter() {
  counter.innerText = count + 1;
}

//function to decrease counter
function decreaseCounter() {
  counter.innerText = count - 1;
}
