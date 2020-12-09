//Keep track of values
const Calculator = {
    //Display the 0
    Display_Value: "0",
    //Set first operand to null
    First_Operand: null,
    //Check second operand input
    Wait_Second_Operand: false,
    //Hold operator
    operator: null,
};

//Modify button value
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //Set value to key clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //Overwrie display_value if 0
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//Handle decimal pts
function Input_Decimal(dot) {
    //Avoid accidental clicking bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //No decimal then add one
        Calculator.Display_Value += dot;
    }
}

//Handle to operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;
    //Store number pressed
    const Value_of_Input = parseFloat(Display_Value);
    //Updates if it exists and exits function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        //Perform property lookup and execute
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //Add a fixed amount of numbers after the .
        result = Number(result).toFixed(9)
        //Remove any trailing 0's
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
} 

//Update the screen with the contents of display_value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//Monitor button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //Target variable reps clicked element
    const { target } = event;
    //If clicked not a button then exit
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    //AC clear the numbers
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})















