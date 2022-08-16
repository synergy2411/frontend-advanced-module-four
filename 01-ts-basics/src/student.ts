interface Human {
    name: string;
    eat(): string;
}

class User implements Human {
    name: string = "";
    eat(): string {
        throw new Error("Method not implemented.");
    }

}




// abstract class Human {
//     abstract sleep(): string;
//     eat() { console.log("Human can eat") }
// }

// class Employee extends Human {
//     sleep(): string {
//         return "Employee can sleep";
//     }
// }


// class User extends Human {
//     sleep(): string {
//         return "User can also sleep"
//     }
// }

// let e1 = new Employee();
// let u1 = new User();

// e1.eat()

// console.log(e1.sleep());












// class Person {
//     // protected name: string;
//     constructor(protected name: string) {
//         // this.name = name;
//     }
//     eat() {
//         console.log("Person can eat")
//     }
// }

// class Student extends Person {
//     // private studName: string;
//     // private studId: string;
//     constructor(studName: string, private studId: string) {
//         super(studName)
//         // this.studName = studName;
//         // this.studId = studId;
//     }
//     getStudDetails(): string {
//         return `${this.studId} - ${this.name}`
//     }
//     // eat() {
//     //     super.eat();
//     //     console.log("Student can eat in class also")
//     // }
// }

// let foo = new Student("Foo Bar", "S001");

// console.log(foo.getStudDetails())
// foo.eat();