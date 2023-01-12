const num1Input = document.querySelector('.num1');
const num2Input = document.querySelector('.num2');
const sumButton = document.querySelector('.calc_result');


sumButton.addEventListener('click', function() {
  const num1 = parseInt(num1Input.value);
  const num2 = parseInt(num2Input.value);
  const sum = num1 + num2;
  document.querySelector('.calc_calc').value = sum;
});
