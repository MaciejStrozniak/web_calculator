const log = console.log;
const bodyEl = document.querySelector('body');

function Calculator(node) {
    this.calculator = document.createElement('div');
    this.inputField = document.createElement('input');
    this.reset = document.createElement('button');
    this.digitContainer = document.createElement('div');
    this.operationsContainer = document.createElement('div');
    this.sum = document.createElement('button');

    this.buildCalc = function() {

        for(let i = 0; i < 10; i++) {
            this.digit = document.createElement('button');
            this.digit.textContent = `${i}`;
            this.digitContainer.appendChild(this.digit); 
        };

        for(let i = 0; i < 4; i++) {
            this.operation = document.createElement('button');

            switch (i) {
                case 0:
                    this.operation.textContent = '/';
                    break;
                case 1:
                    this.operation.textContent = '*';
                    break;
                case 2:
                    this.operation.textContent = '-';
                    break;
                case 3:
                    this.operation.textContent = '+';
                    break;
            }

            this.operationsContainer.appendChild(this.operation);
        };

        this.reset.textContent = 'AC';
        this.sum.textContent = '='

        this.calculator.appendChild(this.inputField);
        this.calculator.appendChild(this.reset);
        this.calculator.appendChild(this.digitContainer);
        this.calculator.appendChild(this.operationsContainer);
        this.calculator.appendChild(this.sum);

        node.appendChild(this.calculator);
    };


};

const calc1 = new Calculator(bodyEl);
calc1.buildCalc();
