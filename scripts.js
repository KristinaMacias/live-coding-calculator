class Calculate {
    constructor() {
        this.total = 0;
        console.log("initial total: ", this.total);
    }
    //add numbers
    addNumbers(a, b) {
        return (this.total = a + b);
    }

    //subtract
    subtractNumbers(a, b) {
        return this.total = a - b;
    }

    //multiply
    multiplyNumbers(a, b) {
        return this.total = a * b;
    }

    //divide
    divideNumbers(a, b) {
        return this.total = a / b;
    }
}

class App {
    constructor() {
        this.calc = new Calculate();

        //store the first number
        this.firstPrompt = prompt('Please enter your first number');
        this.firstNumber = parseInt(this.firstPrompt);
        console.log(typeof this.firstNumber, this.firstNumber);
        while(isNaN(this.firstNumber)) {
            this.firstPrompt = prompt('Please enter your first number');
            this.firstNumber = parseInt(this.firstPrompt);
        }

        //store the operator (+, -, *, /)
        this.validOperators = ["+", "-", "*", "/"];

        this.operator = prompt('Please enter an operator (+, -, *, /)');
        console.log(this.operator);

        //while loop to check if the operator is valid
        while (!this.validOperators.includes(this.operator)) {
            this.operator = prompt('Please enter a VALID operator (+, -, *, /)');
        } 

        //store the second number
        this.secondPrompt = prompt('Please enter your second number');
        this.secondNumber = parseInt(this.secondPrompt);
        console.log(typeof this.secondNumber, this.secondNumber);
        while(isNaN(this.secondNumber)) {
            this.secondPrompt = prompt('Please enter your second number');
            this.secondNumber = parseInt(this.secondPrompt);
        }
        

    }
    //call the calculations above
    callCalculations() {
        
        //switch statement
        switch(this.operator) {
            case "+":
                this.calc.addNumbers(this.firstNumber, this.secondNumber);

                break;
            case "-":
                this.calc.subtractNumbers(this.firstNumber, this.secondNumber);
                break;
            case "*":
                this.calc.multiplyNumbers(this.firstNumber, this.secondNumber);
                break;
            case "/":
                this.calc.divideNumbers(this.firstNumber, this.secondNumber);
                break;
            default:
                alert("Invalid number or operator");
                break;
        }
        this.equation = `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${this.calc.total}`
      

        alert(this.equation);
        console.log(this.equation)

    }
    //display the results of the calculation
    displayResult() {
        this.equation = `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${this.calc.total}`
      

        alert(this.equation);
        console.log(this.equation)
    }
}

let startApp = new App();
startApp.callCalculations();
//startApp.displayResult();