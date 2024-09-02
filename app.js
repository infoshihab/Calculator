const display = document.querySelector(".section input");
const buttons = document.querySelectorAll("form button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (evt) => {
    evt.preventDefault();
    inputHandle(evt.target.innerHTML);
  });
});

document.addEventListener("keypress", (event) => {
  const key = event.key;
  if (
    (key >= "0" && key <= "9") ||
    key == "." ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/"
  ) {
    inputHandle(key);
  } else if (key === "Enter" || key === "=") {
    inputHandle("=");
  } else if (key === "%") {
    inputHandle("%");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    inputHandle("DEL");
  } else if (event.key === "Escape") {
    inputHandle("AC");
  }
});

function inputHandle(input) {
  if (input == "=") {
    try {
      string = eval(string);
      display.value = string;
    } catch {
      display.value = "Error";
      string = "";
    }
  } else if (input == "AC") {
    string = "";
    display.value = string;
  } else if (input == "DEL") {
    string = string.slice(0, -1);
    display.value = string;
  } else if (input == "%") {
    string = (parseFloat(string) / 100).toString();
    display.value = string;
  } else {
    string += input;
    display.value = string;
  }
}
