// Creating a class of the calculator
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    // Function for all clear button
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    // Function for delete button
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }
    // Append clicked number to current number on display
    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return
        // Convert to string and append it to current
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    // Function for operation buttons
    chooseOperation(operation) {
        // Check if current display is empty then do nothing
        if (this.currentOperand === '') return
        // Check if previous display is not empty then make calculations
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        // Update previous and current display
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        // convert string to a number
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        // Check if there is no previous number or current
        if (isNaN(prev) || isNaN(current)) return  
        // Cases for operations
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        // Split string number on period character, turn into array first part before '.' and second part after
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        // Check if there is operation then concatenate operation to prev operand
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)}${this.operation}`
        }

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const acButton = document.querySelector('[data-ac]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click' , () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})    

operationButtons.forEach(button => {
    button.addEventListener('click' , () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})    

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

acButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})