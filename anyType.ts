// any type
let age: any = 25;

age = { a: "b" };
age = "test";
age = true;

let person: any[] = [];
person.push("test1");
person.push(5);
console.log(person);
