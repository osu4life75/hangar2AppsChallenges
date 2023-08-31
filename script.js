const showNumbersButton = document.getElementById("showNumbersButton");
const oddNumbersList = document.getElementById("oddNumbersList");
let currentNumber = 1;

showNumbersButton.addEventListener("click", function() {
  if (currentNumber < 100) {
    const numberDiv = document.createElement("div");
    numberDiv.className = "number-item";
    numberDiv.textContent = currentNumber;
    oddNumbersList.appendChild(numberDiv);

    currentNumber += 2;
  } else {
    showNumbersButton.disabled = true;
  }
});





