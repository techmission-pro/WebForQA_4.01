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
document.getElementById('opt').addEventListener('change',function (){ 
  calculate()
})
document.getElementById('firstNumber').addEventListener('input',function (){ 
  if (isNaN(document.getElementById('firstNumber').value)) {
    alert('Please enter number only')
    document.getElementById('firstNumber').value = '';
  }
  calculate()
})
document.getElementById('secondNumber').addEventListener('input',function (){ 
  if (isNaN(document.getElementById('secondNumber').value)) {
    alert('Please enter number only')
    document.getElementById('secondNumber').value = '';
  }
  calculate()
})
document.getElementById('clear').addEventListener('click', () => {
  document.getElementById('firstNumber').value = '';
  document.getElementById('secondNumber').value = '';
  document.querySelector('[name="result"]').value = '';
});