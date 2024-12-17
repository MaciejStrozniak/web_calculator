const log = console.log;
const bodyEl = document.querySelector('body');
let num1 = null;
let num2 = null;
let sum = null;
let mathOperation = null;
let keepCalculating = true;

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

// document.addEventListener('click', (event) => {

//     let textFieldNewValue = document.querySelector('#text-field').textContent;
//     const target = event.target;
//     const targetClass = target.className;
//     const targetID = target.id;
//     let targetText = target.textContent;    

//     if(targetClass === 'digit' && mathOperation === null) {
//         if(textFieldNewValue === '0') {
//             textFieldNewValue = '';
//             document.querySelector('#text-field').textContent = textFieldNewValue;
//         }

//         if (textFieldNewValue !== '0' && keepCalculating === true) {
//             textFieldNewValue += targetText;
//             document.querySelector('#text-field').textContent = textFieldNewValue;
//             num1 = parseInt(textFieldNewValue);
//         }
//         else if (textFieldNewValue !== '0' && keepCalculating === false) {
//             textFieldNewValue = targetText;
//             document.querySelector('#text-field').textContent = textFieldNewValue;
//             num1 = parseInt(textFieldNewValue);
//             keepCalculating = true;
//         }    
//     }
//     else if(targetClass === 'operations' && mathOperation === null) {
//         switch (targetID) {
//             case '/':
//                 mathOperation = '/';
//                 break;
//             case '*':
//                 mathOperation = '*';
//                 break;
//             case '-':
//                 mathOperation = '-';
//                 break;
//             case '+':
//                 mathOperation = '+';
//                 break;
//         }
//     }
//     else if(targetClass === 'digit' && mathOperation !== null) {
//         if(num1 !== 0 && num2 === 0) {
//             textFieldNewValue = targetText;
//             document.querySelector('#text-field').textContent = textFieldNewValue;
//             num2 = parseInt(textFieldNewValue);
//         }
//         else {
//             textFieldNewValue += targetText;
//             document.querySelector('#text-field').textContent = textFieldNewValue;
//             num2 = parseInt(textFieldNewValue);
//             log(`${num1} and ${num2}`);
//         }        
//     }
    
//     // if((targetClass === 'operations' && mathOperation !== null))

//     else if((targetClass === 'operations') && (mathOperation !== null && num1 !== null && num2 !== null)) {
//         let calculations = new calculateMathOperation(num1, num2, mathOperation);
//         textFieldNewValue = calculations.calculate();
//         document.querySelector('#text-field').textContent = textFieldNewValue;
//         log(num1);
//         num1 = parseFloat(textFieldNewValue);
//         num2 = 0;
//         mathOperation = '';
//         keepCalculating = false;
//         log(num1, num2, mathOperation);
//     }
// });

// jeśli key === 'digit', num1 === null, num2 === null, mathOperation === null
// wybieram pierwszą liczbę
    // num1 !== null
    // jeśli key === 'digit', num1 !== null, num2 === null, methOperation === null
    // mogę ją wydłużać o kolejne
        
    // if key === 'operations', num1 !== null, num2 === null, mathOperation === null 
        // wybieram działanie
            // mathOperationa !== null
            // pierwsza liczba jest parsowana do Int

    // if key === 'digit, num1 !== null, num2 === null, mathOperationa !== null
        // wybieram kolejną liczbę
        // num2 !== null
            // if key === 'digit', num1 !== null, num2 !== null, mathOperation !== null
            // mogę ją wydłużać

    // if key === 'operations', num1 !== null, num2 !== null, mathOperations !== null
        // parseFloat(num2)
        // num1 = wynik działania => num1 !== null
        // mathOperations = nowa operacja => mathOperations !== null
        // num2 = null

    // if key === '=', num1 !== null, num2 !== null, mathOperation !== null


document.addEventListener('click', (event) => {

    let textFieldNewValue = document.querySelector('#text-field').textContent;
    const target = event.target;
    const targetClass = target.className;
    const targetID = target.id;
    let targetText = target.textContent;

    if(targetClass === 'digit' && num1 === null && num2 === null && mathOperation === null) {
        num1 = targetText;
        log(num1);
    }
    else if(targetClass === 'digit' && num1 !== null && num2 === null && mathOperation === null) {
        num1 += targetText;
        log(num1);
    }
    else if(targetClass === 'operations' && num1 !== null && num2 === null && mathOperation === null) {
        mathOperation = targetID;
        num1 = parseFloat(num1);
        log(typeof(num1));
        log(mathOperation);
    }
    // tutaj powstaje pętla po pierwszym wyświetleniu działania
    else if(targetClass === 'digit' && num1 !== null && num2 === null && mathOperation !== null) {
        num2 = targetText;
        log('loop');
        log(num2);
    }
    else if(targetClass === 'digit' && num1 !== null && num2 !== null && mathOperation !== null) {
        num2 += targetText;
        log(num2);
    }
    // wykonanie obliczeń po wybraniu nowej operacji
    else if(targetClass === 'operations' && targetID !== '=' && num1 !== null && num2 !== null && mathOperation !== null) {
        num2 = parseFloat(num2);
        let score = new calculateMathOperation(num1, num2, mathOperation);
        num1 = parseFloat(score.calculate());
        mathOperation = targetID;
        num2 = null;

        log(`Wynik = ${num1}`);       
    }
    
    // wybór znaku równa się
    if(targetClass === 'operations' && targetID === '=' && num1 !== null && num2 !== null && mathOperation !== null) {
        num2 = parseFloat(num2);
        let score = new calculateMathOperation(num1, num2, mathOperation);
        num1 = parseFloat(score.calculate());
        mathOperation = null;
        num2 = null;

        log(`Wynik po równa się = ${num1}`);
        num1 = null;
    }

    if(targetClass === 'digit' && targetID === 'AC') {
        num1 = null;
        num2 = null;
        mathOperation = null;

        log(num1);
    }

});