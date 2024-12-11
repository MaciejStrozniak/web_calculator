const log = console.log;
const bodyEl = document.querySelector('body');

function CalculatorContainer() {
    this.calculatorContainer = document.createElement('div');
    this.calculatorContainer.id = "calculator-container";
    this.calculatorContainer.style.background = 'red';
    return this.calculatorContainer;
}

function TextField() {
    this.textField = document.createElement('div');
    this.textField.textContent = '0';
    this.textField.style.background = 'white';
    this.textField.id = 'text-field';
    return this.textField;
}

function DigOpContainer() {
    this.digOpContainer = document.createElement('div');
    this.digOpContainer.id = 'digOp-container';
    return this.digOpContainer;
}

function DigitsContainer() {
    this.digitsContainer = document.createElement('div');
    this.digitsContainer.id = 'digits-container';
    this.digitsContainer.style.background = 'blue';
    return this.digitsContainer;
}

function OperationContainer() {
    this.operationsContainer = document.createElement('div');
    this.operationsContainer.id = 'operations-container';
    return this.operationsContainer;
}

//--------- NEW BUTTON CONSTRUCTOR ---------
function CalcBtn(html_element, id, textContent, class_name) {
    this.calcButton = document.createElement(`${html_element}`);
    this.calcButton.id = id;
    this.calcButton.textContent = `${textContent}`;
    this.calcButton.classList = class_name;
    return this.calcButton;
}
//------------------------------------------

//--------- NEW BUTTON CREATE FUNCTION -----
function createButton_new(button_obj) {

}

function createButton(btnType_string) {
    let newButton = '';
    switch (btnType_string) {
        case 'digit':
            for( let i = 0; i < 10; i++) {
                newButton = new DigitBtn();
                newButton.textContent = `${i}`;
                digitsCont.appendChild(newButton);
            }
            break;
        case 'operation':
            let operation = '';;
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
                newButton = new OperationBtn(operation);
                operationsCont.appendChild(newButton);
            }
            break;
        case 'reset':
            return newButton = new ResetBtn();
            // calculatorContainer.appendChild(newButton);
            break;
    }        
}

//------------------------------------------

function DigitBtn() {
    this.digit = document.createElement('button');
    this.digit.classList = 'digit';
    this.digit.style.background = 'yellow';
    this.digit.textContent = '1000';
    return this.digit;
}

function OperationBtn(operation) {
    this.operation = document.createElement('button');
    this.operation.id = `${operation}`;
    this.operation.style.background = 'pink';
    this.operation.classList = 'operations';
    this.operation.textContent = operation;
    return this.operation;
}

function ResetBtn() {
    this.resetBtn = document.createElement('button');
    this.resetBtn.id = 'AC';
    this.resetBtn.style.background = 'brown';
    this.resetBtn.textContent = 'AC';
    return this.resetBtn;
}

function createButton(btnType_string) {
    let newButton = '';
    switch (btnType_string) {
        case 'digit':
            for( let i = 0; i < 10; i++) {
                newButton = new DigitBtn();
                newButton.textContent = `${i}`;
                digitsCont.appendChild(newButton);
            }
            break;
        case 'operation':
            let operation = '';;
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
                newButton = new OperationBtn(operation);
                operationsCont.appendChild(newButton);
            }
            break;
        case 'reset':
            return newButton = new ResetBtn();
            // calculatorContainer.appendChild(newButton);
            break;
    }        
}

const calcContainer = new CalculatorContainer();
const inputFl = new TextField();
const resetButton = new ResetBtn();
const digOpCont = new DigOpContainer();
const digitsCont = new DigitsContainer();
const operationsCont = new OperationContainer();

calcContainer.appendChild(inputFl);
calcContainer.appendChild(createButton('reset'));
calcContainer.appendChild(digOpCont);
digOpCont.appendChild(digitsCont);
digOpCont.appendChild(operationsCont);
createButton('digit');
createButton('operation');

bodyEl.appendChild(calcContainer);


//------------------------- OPERATIONS ------------------//
