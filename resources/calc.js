console.log('Calc loaded');

function calculate(){
	const num1 = +document.querySelector('[name="num1"]').value;
	const num2 = +document.querySelector('[name="num2"]').value;
	const op = document.querySelector('[name="op"]').value;
	
	let result;
	if ( op === 'plus') 
	{
		result = num1 + num2;
	} else if ( op === 'minus')
	{
		result = num1 - num2;
	} else if ( op === 'multiple')
	{
		result = num1 * num2;
	} else if ( op === 'divide')
	{
		result = num1 / num2;
	} else {
		console.error('Wrong op');
		alert('Wrong operation is selected');
	}
	
	//const sum = num1 + num2;
	
	document.querySelector('.calc-result').value = result;
}

document.querySelector('.calc-calculate').addEventListener('click', function () {
	calculate ();
}) ;

document.querySelector('[name="op"]').addEventListener ('change', function () {
	calculate ();
}) ;

document.querySelector('[name="num1"]').addEventListener ('input', function () {
	calculate ();
}) ;

document.querySelector('[name="num2"]').addEventListener ('input', function () {
	calculate ();
}) ;