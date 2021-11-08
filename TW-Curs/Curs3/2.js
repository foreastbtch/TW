function Person(name,age){
    this.name=name;
    this.age=age;
    this.PrintMe = function (){
        console.log(`${this.name} is ${this.age} old`)
    }
}

let p0 = new Person('jim',22)
p0.PrintMe()

let p1 = new Person('jane',25)
p1.PrintMe()

console.log(p0.__proto__)