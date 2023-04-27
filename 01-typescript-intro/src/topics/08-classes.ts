class Person {
    //Properties of the class:
    public name: string;
    //Private properties are only accesible from the class:
    private address: string;

    //Methods of the class:
    constructor() {
        this.name = "Fernando";
        this.address = "New York";
    };
}

const ironman = new Person();
console.log(ironman.address);