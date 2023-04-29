//Try to avoid any datatype.
export function whatsMyType<T>(argument: T): T {
    return argument;
}

//It is possible to define the datatype to the arguments.
//The function is generic but the datatype can be sent to avoid any datatype:
const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType(<number[]>[1, 2, 3, 4, 5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));