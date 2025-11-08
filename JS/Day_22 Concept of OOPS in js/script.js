
class Animal{
    constructor(name){
        this.name = name
        console.log("Now, Object is created...")
    }

    eats(){
        console.log("I am eating")
    }
    jumps(){
        console.log("i am jumping")
    }
}

class Lion extends Animal {
    constructor(name){
        super(name) 
        console.log("Object is created and he is a dog...")
    }

    eats(){
        super.eats()
        console.log("I am eating bread")
    }
}

let a = new Animal("Tommy");
console.log(a)

let l = new Lion("Shera")
console.log(l)