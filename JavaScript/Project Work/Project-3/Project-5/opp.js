function runExamples() {
    let result = "";

    // Inheritance Examples
    result += "-------------------------------------------\n";
    result += "Inheritance Examples:\n";
    result += "-------------------------------------------\n";

    // 1
    class Animal {
        sound() {
            return "Animal sound";
        }
    }

    class Dog extends Animal {
        bark() {
            return "Dog barks";
        }
    }

    let d = new Dog();
    result += d.sound() + "\n" + d.bark() + "\n\n";

    // 2
    class Vehicle {
        move() {
            return "Vehicle moves";
        }
    }

    class Car extends Vehicle {
        type() {
            return "Car is four-wheeler";
        }
    }

    let c = new Car();
    result += c.move() + "\n" + c.type() + "\n\n";

    // 3
    class Person {
        sayHello() {
            return "Hello from person";
        }
    }

    class Student extends Person {
        study() {
            return "Student studies";
        }
    }

    let s = new Student();
    result += s.sayHello() + "\n" + s.study() + "\n\n";

    // 4
    class Fruit {
        grow() {
            return "Fruit grows on tree";
        }
    }

    class Mango extends Fruit {
        taste() {
            return "Mango is sweet";
        }
    }

    let m = new Mango();
    result += m.grow() + "\n" + m.taste() + "\n\n";

    // 5
    class Appliance {
        power() {
            return "Appliance uses electricity";
        }
    }

    class Fan extends Appliance {
        rotate() {
            return "Fan rotates";
        }
    }

    let f = new Fan();
    result += f.power() + "\n" + f.rotate() + "\n\n";

    // Polymorphism Examples
    result += "-------------------------------------------\n";
    result += "Polymorphism Examples:\n\n";
    result += "-------------------------------------------\n";

    // 1
    class Bird {
        fly() {
            return "Bird flies";
        }
    }

    class Sparrow extends Bird {
        fly() {
            return "Sparrow flies fast";
        }
    }

    class Eagle extends Bird {
        fly() {
            return "Eagle flies high";
        }
    }

    let b1 = new Sparrow();
    let b2 = new Eagle();
    result += b1.fly() + "\n" + b2.fly() + "\n\n";

    // 2
    class Message {
        send() {
            return "Sending message";
        }
    }

    class Email extends Message {
        send() {
            return "Sending email";
        }
    }

    class SMS extends Message {
        send() {
            return "Sending SMS";
        }
    }

    let msg1 = new Email();
    let msg2 = new SMS();
    result += msg1.send() + "\n" + msg2.send() + "\n\n";

    // 3
    class Shape {
        draw() {
            return "Drawing shape";
        }
    }

    class Circle extends Shape {
        draw() {
            return "Drawing circle";
        }
    }

    class Square extends Shape {
        draw() {
            return "Drawing square";
        }
    }

    let sh1 = new Circle();
    let sh2 = new Square();
    result += sh1.draw() + "\n" + sh2.draw() + "\n\n";

    // 4
    class Animal2 {
        makeSound() {
            return "Animal makes sound";
        }
    }

    class Cat extends Animal2 {
        makeSound() {
            return "Cat meows";
        }
    }

    class Cow extends Animal2 {
        makeSound() {
            return "Cow moos";
        }
    }

    let a1 = new Cat();
    let a2 = new Cow();
    result += a1.makeSound() + "\n" + a2.makeSound() + "\n\n";

    // 5
    class Worker {
        work() {
            return "Worker is working";
        }
    }

    class Engineer extends Worker {
        work() {
            return "Engineer builds systems";
        }
    }

    class Doctor extends Worker {
        work() {
            return "Doctor treats patients";
        }
    }

    let w1 = new Engineer();
    let w2 = new Doctor();
    result += w1.work() + "\n" + w2.work() + "\n\n";

    document.getElementById("output").innerText = result;
}
