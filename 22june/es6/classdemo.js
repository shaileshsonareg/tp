class Circle {
    constructor(r) {
        console.log("I am from constructor", r);
        this.radius = r;
    }
    
    area() {
        this.diameter = this.radius + this.radius;
        console.log("I am from circle area...", this.radius);
    }

    circumference() {
        console.log(" I m 4m circumference", this.radius);
        
    }
}

cobj = new Circle(5) // constructor will be called
cobj.area()
cobj.circumference()
console.log("==================");
obj2 = new Circle(7)
obj2.circumference()