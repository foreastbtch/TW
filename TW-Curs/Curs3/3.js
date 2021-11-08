class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    PrintMe() {
        console.log(`${this.name} is ${this.age} old`)
    }
}

let p0 = new Person('jim',22)
p0.PrintMe()

console.log(p0)

let p1 = new Person('jane',25)
p1.PrintMe()

//p0 -> object -> null