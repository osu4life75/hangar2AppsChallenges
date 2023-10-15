function calculateSum() {
  const inputString = document.getElementById('inputString').value;
  const array = inputString.split(',').map(Number); // Convert the input string to an array of numbers
  const sum = sumArray(array);

  document.getElementById('result').textContent = sum;
}

function sumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
      sum += array[i];
  }

  return sum;
}