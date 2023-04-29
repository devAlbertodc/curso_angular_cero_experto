export class Person {
    //Properties of the class:
    //Private properties are only accesible from the class:

    //public name: string;
    //private address: string;

    //First method to be called when an object of the class is created:
    constructor(
        public firstName: string,
        public lastName: string,
        private address: string = 'No address') {
        //this.name = name;
        //this.address = address;
    };
}

//This class will inherate all the properties from the parent class:
/*export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        //Call the parent constructor sending name and address
        super(realName, 'New York');
    }
}*/

export class Hero {

    //Another way to create attributes without extends Class:
    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        //this.person = new Person(realName);
    }
}

const tony = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero("Ironman", 45, "Tony", tony);
console.log(ironman);