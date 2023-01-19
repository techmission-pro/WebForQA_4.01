document.querySelector('.calc-calculate').addEventListener('click', function () {
	const num1 = +document.querySelector('[name="num1"]').value;
	const num2 = +document.querySelector('[name="num2"]').value;
	
	const sum = num1 + num2;
	
	document.querySelector('.calc-result').value = sum;
});