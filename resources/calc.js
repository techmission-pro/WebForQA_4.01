function calculate (){
    const num1 = document.querySelector('[name="num1"]').value;
    const num2 = document.querySelector('[name="num2"]').value;
    const op = document.querySelector('[name="op"]').value;

    let result;

    if (op ==='plus') {                
        result = parseInt (num1) + parseInt (num2);
    }
    else if (op === 'minus'){
        result = parseInt (num1) - parseInt (num2);
    }
    else if (op === 'multiply') {
        result = parseInt (num1) * parseInt (num2);
    }
    else if (op === 'divide') {
        result = parseInt (num1) / parseInt (num2);
    }
    else {
        console.error('Wrong op!');
        alert('Wrong operation is selected');

    } 

    //const sum = num1 + num2;

    document.querySelector('.calc-result').value = result;
}

document.querySelector('.calc-calculate').addEventListener('click', function(){
    calculate();
} );

document.querySelector('[name="op"]').addEventListener('change', function(){
    calculate();
});

document.querySelector('[name="num1"]').addEventListener('input', function(){
    calculate();
});

document.querySelector('[name="num2"]').addEventListener('input', function(){
    calculate();
});

