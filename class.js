"use strict";
// Class
Object.defineProperty(exports, "__esModule", { value: true });
exports.employees = void 0;
var employees = /** @class */ (function () {
    //   public name: string;
    //   private age: number;
    //   readonly male: boolean;
    //   constructor(name: string, age: number, male: boolean) {
    //     this.name = name;
    //     this.age = age;
    //     this.male = male;
    //   }
    function employees(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    employees.prototype.print = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Gender: ").concat(this.male);
    };
    return employees;
}());
exports.employees = employees;
var user = new employees("tung", 25, true);
console.log(user.print());
