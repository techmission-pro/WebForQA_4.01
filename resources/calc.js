 function  calculate () {
    const num1 = +document.getElementById("num1").value;
    const num2 = +document.getElementById("num2").value;
    const op = document.getElementById("op").value;

    let result
    if(op === 'plus') {
      result = num1 + num2;
     } else if (op === 'minus') {
      result = num1 - num2;
     } else if (op === 'multiply') {
      result = num1 * num2;
     } else if (op === 'divide') {
      result = num1 / num2;
     } else {
      console.error('Wrong op!');
      alert('Wrong operation is selected');
     }


    document.getElementById('calc-result').innerText = result;
 }
