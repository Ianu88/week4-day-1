class Animal{
    constructor(name){
        this.name= name;
        this.health= 100;
        this.hunger=100;
    }
        drinks(){
            this.health +=5;
return this;
}    
eats(){
    this.health +=5;
    this.hunger +=10;
console.log(`${this.name}'s health is currently ${this.health} `)
    return this;
}
stats(){
return console.table({
    name: this.name,
    health: this.health
});
}
}

class Dog extends Animal{
    constructor (name, happy){
        super (name, happy);
        this.happy = happy;
    }
playBall(){
    this.health += 10;
    this.hunger -= 10;
    console.log(`${this.name} is happy`);
    return this;
}
walks(){
    console.log(`Taking ${this.name} for a walk, they are ${this.happy}`);
    this.health += 10;
    return this;
}
}