const log = console.log;
const bodyEl = document.querySelector('body');

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
