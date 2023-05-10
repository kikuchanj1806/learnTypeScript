/* Array and Object */
let names: string[] = ["tung", "lam"];

names.push("hoang");
// names.push(1);
// names.push(false);

console.log(names);

let number: number[] = [1, 2];

// number.push("hoang");
number.push(6);

console.log(number);

let mixed: (string | number | boolean | object)[] = [1, 2, 3, 4, "tung", true];

mixed.push("test", 999);
mixed.push({ a: 4, b: "name", c: "age" });
console.log(mixed);

let object = {
  name: "tung",
  age: "24",
  phone: "0868323448",
  address: "Dong da, Ha noi",
};

object.name = "le xuan tung";

console.log(object);
