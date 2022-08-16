type ResourceType = { resourceName: string }

interface Resource<T extends ResourceType> {
    myResources: T
}

let resourceTwo: Resource<{ resourceId: number } & ResourceType> = {
    myResources: {
        resourceName: "",
        resourceId: 0
    }
}


// interface Resource<T,U>{
//     resourceName : T,
//     resournceId : U
// }

// let resourceOne : Resource<string, number> = {
//     resourceName: "Employee Admin",
//     resournceId: 1001
// }

















// class Person<T extends PersonType>{
//     constructor(private obj: T) {
//     }
//     getDetails() {
//         return this.obj;
//     }
// }

// type PersonType = {
//     firstName: string,
//     lastName: string,
//     age: number
// }

// let objThree: PersonType = {
//     firstName: "",
//     lastName: "",
//     age: 32
// }

// let myObj = new Person<{
//     firstName: string, lastName: string, age: number, avatar: string, city: string
// }>({ firstName: "Foo", lastName: "Bar", age: 32, avatar: "", city: "" })

// let myObjTwo = new Person<{
//     avatar: string, city: string
// } & PersonType>({ avatar: "", city: "", ...objThree })


// console.log(myObj.getDetails())





// class Courses<T, U>{
//     constructor(private courseId : T, private courseName : U){}
//     getCourseId() : string {
//         return "Course ID " + this.courseId;
//     }
// }

// let reactCourse = new Courses<string, string>("101", "React for Beginners")

// let angularCourse = new Courses<number, string>(102, "Mastering Angular");

// function addAtBeginning<T>(num: T, arr: Array<T>): Array<T> {
//     return [num, ...arr]
// }

// const numberArray = addAtBeginning<number>(10, [9, 8, 7, 6]);

// const stringArray = addAtBeginning<string>("A", ["B", "C", "D"])

// stringArray[0].

// numberArray[0].

// const numArray = addAtBeginning(4, [3,4,6,7])

