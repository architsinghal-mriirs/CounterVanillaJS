//initally setting the count value to 0
let count = 0;

//selectors
const value = document.querySelector("#counter");
const btn = document.querySelectorAll(".btn");

btn.forEach((element) => {
  element.addEventListener("click", (e) => {
    const props = e.currentTarget.classList;
    if (props.contains("increase")) {
      count++;
    } else if (props.contains("decrease")) {
      count--;
    } else if (props.contains("start")) {
      interval = setInterval(() => {
        count++;
        value.textContent = count;
      }, 1000);
    } else if (props.contains("stop")) {
      clearInterval(interval);
    } else if (props.contains("reset")) {
      clearInterval(interval);
      count = 0;
    }
    value.textContent = count;
  });
});
