//Use of optional chaining is ?:
//Using !: means that always there will be a value
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Alberto',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth']
}

const printChildren = (passenger: Passenger) => {
    //Number of children checking if property exist.
    //If property does not exist, else...
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren)
}

printChildren(passenger1);
printChildren(passenger2); 