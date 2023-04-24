//This variable has string as datatype:
let name = 'Alberto';
//If a new value is reassigned to a variable with different datatype, will fail:
name = 123;

//Declare variable with a concrete datatype or magic string:
let hpPoints:number|'FULL' = 100;
hpPoints = 'FULL'

//It is possible to assign more than one datatype to same variable:
let id:number | string = '1';
id=1;

//When value never changes, we can use const:
const isAlive:boolean = true;

//This is printed when main.ts imports this file:
console.log({
    name, hpPoints, isAlive
})
export {};