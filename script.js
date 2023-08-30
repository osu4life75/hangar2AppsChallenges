const showNumbersButton = document.getElementById("showNumbersButton");
const currentNumberElement = document.getElementById("currentNumber");
let currentNumber = 1;

showNumbersButton.addEventListener("click", function() {
  if (currentNumber < 100) {
    currentNumberElement.textContent = currentNumber;
    currentNumber += 2;
  } else {
    currentNumberElement.textContent = "No more odd numbers.";
  }
});