/*Function Signature */

let greet: Function;

greet = () => {
  console.log("Hello");
};

let person: (a: string, b: number) => void;
person = (name: string, age: number) => {
  console.log(`${name} says ${age}`);
};

// person("tung", 30);

let caculate: (a: number, b: number, c: string) => number;
caculate = (totalMoney: number, moneyIn: number, action: string) =>
  action === "add" ? totalMoney + moneyIn : totalMoney;
console.log(caculate(10, 5, "add"));
