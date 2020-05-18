class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }

}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGretting(){
         return this.hasHomeLocation() ? super.getGretting() + ` I'm visiting from ${this.homeLocation}` : `${super.getGretting()}`; 

    }
}

const me = new Traveler('Andrew Mead', 26, 'Philadelphia');
console.log(me.getGretting());

const other = new Traveler(undefined, undefined,'Nowhere');
console.log(other.getGretting());