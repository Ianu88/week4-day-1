class dog{
    constructor(name,breed){
        this.name= name;
        this.breed = breed;
    }
walk(){
    console.log(`Taking ${this.name} the ${this.breed} for a walk.`);
    return this;
}

eat(){
    console.log(`${this.name} has had it's food.`);
    return this;
}
}
const stanley = new dog(`Stanley`, `Bulldog`);
stanley.walk();
stanley.eat();

class dog{
    constructor(name,breed){
        this.name= name;
        this.breed = breed;
    }
}