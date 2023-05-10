/* Explicit type */
let myName: string;
let age: number;
let isAuthenticated: boolean;

myName = "tung";
// myName = 5

let student: string[] = ["Student1", "Student2"];

student.push("student3");
console.log(student);

let mixed: (string | number | boolean | object)[] = [1, 2, 3, 4, "tung", true];

mixed.push("test", 999);
mixed.push({ a: 4, b: "name", c: "age" });
console.log(mixed);

let person: object;
person = { name: "John", age: 42, address: "new" };
person = []; // Trong javascript thì [] được coi là 1 object type ( tương tự với function cũng là object (mặc dù tên kiểu là function), Date cũng là object,... )
