const log = console.log;
const bodyEl = document.querySelector('body');

calculatorContainer = document.createElement('div');
inputField = document.createElement('input');
digitsContainer = document.createElement('div');
operationsContainer = document.createElement('div');


function digitBtn() {
    this.digit = document.createElement('button');
    this.digit.id = 'digit';
    this.digit.style.background = 'yellow';
    this.digit.textContent = '1000';
    return this.digit;
}

function operationBtn(operation) {
    this.operation = document.createElement('button');
    this.operation.id = `${operation}`;
    this.operation.style.background = 'pink';
    this.operation.textContent = operation;
    return this.operation;
}

function resetBtn() {
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
                newButton = new digitBtn();
                newButton.textContent = `${i}`;
                digitsContainer.appendChild(newButton);
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
                newButton = new operationBtn(operation);
                operationsContainer.appendChild(newButton);
            }
            break;
        case 'reset':
            return newButton = new resetBtn();
            // calculatorContainer.appendChild(newButton);
            break;
    }        
}

calculatorContainer.appendChild(inputField);
calculatorContainer.appendChild(digitsContainer);
calculatorContainer.appendChild(operationsContainer);
digitsContainer.appendChild(createButton('reset'));
createButton('digit');
createButton('operation');

bodyEl.appendChild(calculatorContainer);