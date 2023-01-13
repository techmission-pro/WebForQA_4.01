function calculate() {
  const firstNumber = document.getElementById('firstNumber').value;
  const secondNumber = document.getElementById('secondNumber').value;
  const oper = document.getElementById('opt').value;

 let result;

  if (oper === 'plus') {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
  }
  else if (oper === 'minus') {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
  }
  else if (oper === 'multiply') {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
  }
  else if (oper === 'divide') {
    result = parseFloat(firstNumber) / parseFloat(secondNumber);
  }
  else {
    console.error('Wrong op');
    alert('Wrong operator is selected');
  }
  document.querySelector('[name="result"]').value = result;
};
