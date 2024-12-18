const log = console.log;
const bodyEl = document.querySelector('body');
let num1 = null;
let num2 = null;
let score = null;
let mathOperation = null;
let keepCalculating = false;

//--------- NEW CONTAINERS CONSTRUCTOR -----
function Container(id, textContent) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.container.textContent = textContent;
    return this.container;
}

//------------------------------------------

//--------- NEW BUTTON CONSTRUCTOR ---------
function CalcBtn(class_name, textContent, id) {
    this.calcButton = document.createElement(`button`);
    this.calcButton.id = id;
    this.calcButton.textContent = `${textContent}`;
    this.calcButton.classList = class_name;
    return this.calcButton;
}
//------------------------------------------

//--------- OPERATION CONSTRUCTOR ---------
function calculateMathOperation(num1, num2, mathOperation) {
    this.num1 = num1;
    this.num2 = num2;
    this.mathOperation = mathOperation;

    this.calculate = function() {
        let result = 0;
        switch(this.mathOperation) {
            case '/':
                return this.num1 / this.num2;
            case '*':
                return this.num1 * this.num2;
            case '-':
                return this.num1 - this.num2;
            case '+':
                return this.num1 + this.num2;
        }
    }
}
//------------------------------------------

//--------- NUMBERS DISPLAY FUNCTION ---------
function displayNumbers(num1, num2) {
    if(num1 !== null && num2 === null)
        document.querySelector('#text-field').textContent = num1;
    else
        document.querySelector('#text-field').textContent = num2;
}
//-----------------------------------------

//--------- NEW BUTTON CREATE FUNCTION -----
function createButtons(type) {
    let newButton = '';
    switch(type) {
        case 'digit':
            // Create digits in reverse order for calculator-style layout
            const order = [
                7, 8, 9,
                4, 5, 6,
                1, 2, 3,
                0, '.' // 0 at the bottom with dot
            ];
            order.forEach(value => {
                const buttonText = value.toString(); // Convert to string
                let newButton = '';
                if(buttonText === '.')
                    newButton = new CalcBtn('digit', buttonText, 'dot');
                else
                    newButton = new CalcBtn('digit', buttonText);

                digitsCont.appendChild(newButton);
            });
            break;
        case 'operation':
            let operation = '';
            for(let i =0; i < 5; i++) {
                switch(i) {
                    case 0:
                        operation = '/';
                        break;
                    case 1:
                        operation = '*';
                        break;
                    case 2:
                        operation = '-';
                        break;
                    case 3:
                        operation = '+';
                        break;
                    case 4:
                        operation = '=';
                        break;
                }
                newButton = new CalcBtn('operations', `${operation}`, `${operation}`);
                operationsCont.appendChild(newButton);
            }
            break;
    }
}

//-----------------------------------------

const calcContainer = new Container('calculator-container');
const inputContainer = new Container('text-field', '0');
const resetButton = new CalcBtn('digit', 'AC', 'AC');
const buttonsContainer = new Container('buttons-container');
const resetDigitCont = new Container('reset-digit-container');
const digitsCont = new Container('digits-container');
const operationsCont = new Container('operations-container');
 
calcContainer.appendChild(inputContainer);
calcContainer.appendChild(buttonsContainer);
buttonsContainer.appendChild(resetDigitCont);
resetDigitCont.appendChild(resetButton);
resetDigitCont.appendChild(digitsCont);
buttonsContainer.appendChild(operationsCont);
createButtons('digit');
createButtons('operation');
 
bodyEl.appendChild(calcContainer);

//------------------------- OPERATIONS ------------------//

document.addEventListener('click', (event) => {

    let textFieldNewValue = document.querySelector('#text-field').textContent;
    const dotButton = document.querySelector('#dot');
    const target = event.target;
    const targetClass = target.className;
    const targetID = target.id;
    let targetText = target.textContent;

    if(targetClass === 'digit' && num1 === null && num2 === null && mathOperation === null) {
        if(targetID === 'dot')
            dotButton.disabled = true;
        num1 = targetText;
        displayNumbers(num1, null);
    }
    // edit po kliknięciu znaku równania
    else if(targetClass === 'digit' && num1 !== null && num2 === null && mathOperation === null && keepCalculating === false) {
        if(targetID === 'dot')
            dotButton.disabled = true;
        num1 += targetText;

        displayNumbers(num1, null);
    }
    else if(targetClass === 'operations' && num1 !== null && num2 === null && mathOperation === null) {
        mathOperation = targetID;
        dotButton.disabled = false;
        num1 = parseFloat(num1).toFixed(3);
    }
    // tutaj powstaje pętla po pierwszym wyświetleniu działania
    else if(targetClass === 'digit' && num1 !== null && num2 === null && mathOperation !== null && keepCalculating === false) {
        if(targetID === 'dot')
            dotButton.disabled = true;
        
        num2 = targetText;
        
        displayNumbers(null, num2);
    }
    // tutaj powstaje pętla po kliknięciu znaku równa się
    else if(targetClass === 'digit' && num1 !== null && num2 === null && mathOperation !== null && keepCalculating === true) {
        if(num2 === null) {
            if(targetID === 'dot')
                dotButton.disabled = true;
            num2 = targetText;
            displayNumbers(null, num2);
        }
        else {
            if(targetID === 'dot')
                dotButton.disabled = true;
            num2 += targetText;
            displayNumbers(null, num2);
        }        
    }
    else if(targetClass === 'digit' && num1 !== null && num2 !== null && mathOperation !== null) {
        if(targetID === 'dot')
            dotButton.disabled = true;
        num2 += targetText;
        displayNumbers(null, num2);
    }
    // wykonanie obliczeń po wybraniu nowej operacji
    else if(targetClass === 'operations' && targetID !== '=' && num1 !== null && num2 !== null && mathOperation !== null) {
        dotButton.disabled = false;
        num2 = parseFloat(num2).toFixed(3);
        let score = new calculateMathOperation(num1, num2, mathOperation);
        num1 = parseFloat(score.calculate()).toFixed(3);
        mathOperation = targetID;
        num2 = null;

        displayNumbers(num1, null);    
    }
    
    // wybór znaku równa się
    if(targetClass === 'operations' && targetID === '=' && num1 !== null && num2 !== null && mathOperation !== null) {
        num2 = parseFloat(num2).toFixed(3);
        score = new calculateMathOperation(num1, num2, mathOperation);
        num1 = parseFloat(score.calculate()).toFixed(3);
        num2 = mathOperation = null;
        keepCalculating = true;
        dotButton.disabled = false;

        displayNumbers(num1, null);    
    }

    // AC
    if(targetClass === 'digit' && targetID === 'AC') {
        num1 = 0;
        displayNumbers(num1, null);
        num1 = num2 = score = mathOperation = null;
        keepCalculating = false;
        dotButton.disabled = false;
    }
});