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
            for(let i=0; i <10; i++) {
                newButton = new CalcBtn('digit', `${[i]}`);
                digitsCont.appendChild(newButton);
            }
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
 const inputFl = new Container('text-field', '0');
 const resetButton = new CalcBtn('AC', 'AC', 'AC');
 const digOpCont = new Container('digOp-container');
 const digitsCont = new Container('digits-container');
 const operationsCont = new Container('operations-container');
 
 calcContainer.appendChild(inputFl);
 calcContainer.appendChild(resetButton);
 calcContainer.appendChild(digOpCont);
 digOpCont.appendChild(digitsCont);
 digOpCont.appendChild(operationsCont);
 createButtons('digit');
 createButtons('operation');
 
 bodyEl.appendChild(calcContainer);

//------------------------- OPERATIONS ------------------//
