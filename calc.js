let equalPressed = 0;
let buttonInput = document.querySelectorAll(".button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => input.value = "";

buttonInput.forEach(button => {
  button.addEventListener("click", () => {
    if (equalPressed === 1) {
      input.value = "";  // Clear input after an equals press
      equalPressed = 0;
    }
    input.value += button.value;
  });
});

equal.addEventListener("click", () => {
  equalPressed = 1;
  try {
    let solution = eval(input.value);
    if (Number.isNaN(solution) || !Number.isFinite(solution)) {
      throw new Error("Invalid mathematical expression");
    }
    input.value = Number.isInteger(solution) ? solution : solution.toFixed(2);
  } catch (error) {
    alert(error.message);
  }
});

clear.addEventListener("click", () => input.value = "");
erase.addEventListener("click", () => input.value = input.value.slice(0, -1));
