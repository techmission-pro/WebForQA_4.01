

document.querySelector('.mycalc-calculate').addEventListener('click', function (){
const num1 = +document.querySelector('[name="num1"]').value;
const num2 = +document.querySelector('[name="num2"]').value;
const op = document.querySelector('[name="op"]').value;

let result;

switch (op) {

    case 'plus':
        result = num1 + num2;
		break
    case 'minus':
        result = num1 - num2;
		break
    case 'multiplay':
        result = num1 * num2;
		break
    case 'divide':
       result =  num1 / num2;      
	   break
    case 'percent':
       result =  num1 * num2/100;   
	   break
	case 'salary-%taxes':	  // зарплата без відсотка податків
	   result =  num1-(num1 * num2/100);  
	
}
document.querySelector('.mycalc-result').value  = result;
}); 