//How to declare a function:
function addNumbers(a:number, b:number):number{
    return a+b;
}

//Same code with lambda function and back-tick:
const addNumbersArrow = (a:number, b:number):string => {
    return `${a + b}`;
}

//Create function with mandatory parameter, optional and default value:
function multiply (firstNumber:number, secondNumber?:number, base=2){
    return firstNumber*base;
}

//Assign the returned value of the function to a variable:
const result:number = addNumbers(1,2);
const result2:string = addNumbersArrow(1,2)

const multiplyResult:number = multiply(5);
console.log({result, result2, multiplyResult})

export{};