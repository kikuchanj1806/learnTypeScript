var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) { return arr[arr.length - 1]; };
var L1 = last([1, 2, 3]);
// console.log(L1);
var lastT = function (arr) { return arr[arr.length - 1]; };
var L2 = lastT([1, 2, 3]);
var L3 = lastT(["a", "f", "b"]);
var L4 = lastT(["a", "f", "b"]);
// console.log(L2);
var makeArray = function (x) { return [x]; };
var m = makeArray("a");
console.log(m);
var makeArrayXY = function (x, y) { return [x, y]; };
var xy = makeArrayXY(4, "2");
var m2 = makeArrayXY("a", 4);
var makeWithTupleDef = function (x, y) { return [x, y]; };
var m3 = makeWithTupleDef("4", 5);
// GENERICS EXTEND
var makeFullName = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var getFullName = makeFullName({
    firstName: "le",
    lastName: "tung",
});
var makeFullNameContrainWithGeneric = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
