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
generateRandomColor();
