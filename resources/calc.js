 document.getElementById("calc-calculate").addEventListener('click', function () {
    const num1 = +document.getElementById("num1").value;
    const num2 = +document.getElementById("num2").value;

    const sum = num1 + num2;

    document.getElementById('calc-result').innerText = sum;
 })
