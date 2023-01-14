var firstInputName = '[name="num1"]';
var secondInputName = '[name="num2"]';
var resultCellName = '[name="calc-result"]';

var stylesErr = `
	border: 1px solid red;
	color: red;
	font-weight: 900;
	text-align: center`;

var stylesDef = `
	border: 1px solid gray;
	color: black;
	font-weight: 400;
	text-align: left`;

function showInputError() {
	document.querySelector('[name="calc-result"]').style = stylesErr;
}

function resetInputError() {
	document.querySelector('[name="calc-result"]').style = stylesDef;
}

function changeColorOfCell(cellName, variant) {
	let stylesToApply;

	if (variant === 'error') {
		stylesToApply = stylesErr;
	}

	if (variant === 'initial') {
		stylesToApply = stylesDef;
	}

	document.querySelector(cellName).style = stylesToApply;
}

function calculate(num1, num2, options) {
	var firstNumberToCalculate = convertInputStringToNumber(num1);
	var secondNumberToCalculate = convertInputStringToNumber(num2);

	if (firstNumberToCalculate === 'Error' || secondNumberToCalculate === 'Error') {
		return 'Error';
	}

	let result;

	switch (options) {
		case 'plus':
			result = firstNumberToCalculate + secondNumberToCalculate;
			break;
		case 'minus':
			result = firstNumberToCalculate - secondNumberToCalculate;
			break;
		case 'multiply':
			result = firstNumberToCalculate * secondNumberToCalculate;
			break;
		case 'divide':
			if (secondNumberToCalculate !== 0) {
				result = firstNumberToCalculate / secondNumberToCalculate;
			} else {
				result = 'Error';
			}
			break;
		default:
			result = 'Error'
	}
	return result;
};

function changeColor() {
	if (document.getElementById("calc_input2").value !== "") {
		document.getElementById("calc_btn").style.background = "lightgreen";
	}
	else if (document.getElementById("calc_input").value !== "") {
		document.getElementById("calc_btn").style.background = 'white';
	}
	else {
		document.getElementById("calc_btn").style.background = 'white';
	}
};

document.querySelector('.calc-calculate').addEventListener('click', function () {
	reaclculate();
});

document.querySelector('[name="options"]').addEventListener('change', function () {
	reaclculate();
});

document.querySelector('[name="num1"]').addEventListener('input', function () {
	reaclculate();
});

document.querySelector('[name="num2"]').addEventListener('input', function () {
	reaclculate();
});

function convertInputStringToNumber(inputString) {
	var parsedValue = parseFloat(inputString);
	if (isNaN(parsedValue)) {
		return 'Error';
	}
	return parsedValue;

}

function reaclculate() {
	// RESET FORM ERRORS
	changeColorOfCell(resultCellName, 'initial')
	document.querySelector(resultCellName).value = "";

	// GET VARIABLES FROM INPUTS
	var num1 = document.querySelector('[name="num1"]').value;
	var num2 = document.querySelector('[name="num2"]').value;
	var options = document.querySelector('[name="options"]').value;

	// ERROR INPUT CHECKING
	if (num1 === '' || num2 === '') {
		return
	}

	// RESULT
	var result = calculate(num1, num2, options);

	// ERROR RESULT CHECKING
	if (result === 'Error') {
		showInputError();
	}

	// SET RESULT
	document.querySelector('[name="calc-result"]').value = result;
}