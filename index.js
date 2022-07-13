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
    } else if (props.contains("stylize")) {
      changeBackground();
    }
    value.textContent = count;
  });
});

function generateRandomColor() {
  let options = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let pallete = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * options.length);
    pallete += options[index];
  }

  console.log(pallete);

  return "#" + pallete;
}
function changeBackground() {
  let pallete = generateRandomColor();
  document.body.style.backgroundColor = pallete;
}
