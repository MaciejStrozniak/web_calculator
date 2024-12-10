const log = console.log;
const bodyEl = document.querySelector('body');

function Calculator(node) {
    this.calculator = document.createElement('div');
    this.inputField = document.createElement('input');
    this.resetBtn = document.createElement('button');
    this.digitContainer = document.createElement('div');
    this.operationsContainer = document.createElement('div');
    this.sum = document.createElement('button');

    this.buildCalc = function() {

        for(let i = 0; i < 9; i++) {
            this.digit = document.createElement('button');
            this.digitContainer.appendChild(this.digit); 
        };

        for(let i = 0; i < 4; i++) {
            this.operations = document.createElement('button');
            this.operationsContainer.appendChild(this.operations);
        };

        this.calculator.appendChild(this.inputField);
        this.calculator.appendChild(this.resetBtn);
        this.calculator.appendChild(this.digitContainer);
        this.calculator.appendChild(this.operationsContainer);
      

        this.calculator.appendChild(this.sum);

        node.appendChild(this.calculator);
    };
};

const calc1 = new Calculator(bodyEl);
calc1.buildCalc();
