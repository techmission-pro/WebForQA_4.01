document.querySelector('.calc-calculate').addEventListener('click', function(){
	const num1 = +document.querySelector('[name="num1"]').value;
	const num2 = +document.querySelector('[name="num2"]').value;
	const pos = document.querySelector('[name="pos"]').value;
	
	let rez;
	
	if (pos === 'plus'){
		rez = num1 + num2;
	} else if (pos === 'minus'){
		rez = num1 - num2;
	} else if (pos === 'multiple'){
		rez = num1 * num2;
	} else if (pos === 'divide'){
		rez = num1 / num2;
	} else {
		console.error('wrong pos');
		alert('Wrong select');
	}
	
	document.querySelector('.calc-result').value = rez;
});