class Person {
    constructor(name = 'Anonymous', age = '0') {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, my name is ${this.name}.`;
    }
    toString() {
        return this.getGreeting();
    }
    getDescription() {
        return this.getGreeting() + ` I am ${this.age} years old.`;
    }
}

let me = new Person ('Andrew', 25);


console.log(me.toString());

class Baby extends Person {
    getGreeting(){
        return 'Wahhhh';
    }
}
let you = new Baby();
console.log(you.getDescription());