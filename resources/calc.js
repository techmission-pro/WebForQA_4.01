console.log('calс-calculate loaded')
function calculate () {
     const num1 = +document.queryselector('[name="num1"]').value;
     const num2 = +document.queryselector('[name="num2"]').value;
	 const op = document.queryselector('[name="op"]').value;
	 
	 let resalt;

    if (op === "plus") {
		resalt=num1+num2;
	}   else if (op ==="minus") {
		resalt=num1+num2;
	}   else if (op === "divide") {
		resalt=num1+num2;
    }   else if (op === "multiply") {
		resalt=num1+num2;
	}	else {
		console.error ('wrong op!);
		alert('wrong operation is selected');
	}	
	
    document.querySelector('.calc-result').value = resalt;

}

document.querySelector('.calс-calculate').addEventListener('click', function () {
     calculate ();
}); 
document.queryselector('[name="op"]').addEventListener('change', function () [
   calculate ()
}) 
document.queryselector('[name="num1"]').addEventListener('change', function () [
   calculate ()
}) 
document.queryselector('[name="num2"]').addEventListener('change', function () [
   calculate ()
}) 