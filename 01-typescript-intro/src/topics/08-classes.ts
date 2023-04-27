class Person {
    //Properties of the class:
    //public name: string;
    //Private properties are only accesible from the class:
    //private address: string;

    //First method to be called when an object of the class is created:
    constructor(
        public name: string,
        private address: string = 'No address') {
        //this.name = name;
        //this.address = address;
    };
}

const ironman = new Person("Ironman", "New York");
console.log(ironman.address);