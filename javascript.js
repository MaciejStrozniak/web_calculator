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
                return result = num1 / num2;
            case '*':
                return result = num1 * num2;
            case '-':
                return result = num1 - num2;
            case '+':
                return result = num1 + num2;
            // ?????????????????
            case '=':
                break;
            // ?????????????????
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


//     // ustawiam num1
//     // wybieram działanie
//     // ustawiam num2
//     // wybieram nowe działanie
//     // w text field wyświetla się wynik pierwszego działania
//     // wybieram nową liczbę, która jest wyświetlana i
//     //      kalkulowana jest z wynikiem pierwszego działania
//     //      na podstawie nowego działania
//     // wybieram kolejne działanie
//     //      wyświetalny jest wynik poprzedniego działania
    

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


document.addEventListener('click', (event) => {

    let textFieldNewValue = document.querySelector('#text-field').textContent;
    const target = event.target;
    const targetClass = target.className;
    const targetID = target.id;
    let targetText = target.textContent;

    if(targetClass === 'digit' && mathOperation === null) {
        if(num1 === null) {
            num1 = parseFloat(targetText);
            log(num1);
        }
        else {
            num1 += parseFloat(targetText);
            // num1 = parseFloat(num1);
            log(num1);
        }        
    }
    else if(targetClass === 'operations' && num1 !== null) {
        if(mathOperation === null) {
            mathOperation = targetText;
            log(mathOperation);
        }
        else {
            if(num1 != null && num2 !== null && sum === null) {
                let calculationObj = new calculateMathOperation(num1, num2, mathOperation);
                sum = parseFloat(calculationObj.calculate());
                log(parseFloat(sum));
                num1 === null;
                num2 === null;
                mathOperation === null;
                delete calculationObj;
                log('DELETE!');
            }
            //mathOperation = targetText;
            else if(num1 != null && num2 !== null && sum !== null) {
                let calculationObj = new calculateMathOperation(num1, num2, mathOperation);
                sum += calculationObj.calculate();
                log(parseFloat(sum));
                num1 === null;
                num2 === null;
                mathOperation === null;
                delete calculationObj;
                log('DELETE TWO!');
            }
        }
    }
    else if(targetClass === 'digit' && mathOperation !== null)
        if(num2 === null) {
            num2 = parseFloat(targetText);
            log(num2);
        }
        else {
            num2 += parseFloat(targetText);
            // num2 = parseFloat(num1);
            log(num2);
        }
});