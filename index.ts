// generic
type myArr = Array<string>;

type numArr = Array<number>;

const last = (arr: Array<number>) => arr[arr.length - 1];
const L1 = last([1, 2, 3]);
// console.log(L1);

const lastT = <T>(arr: Array<T>): T => arr[arr.length - 1];
const L2 = lastT([1, 2, 3]);
const L3 = lastT(["a", "f", "b"]);
const L4 = lastT<string>(["a", "f", "b"]);
// console.log(L2);

const makeArray = <T>(x: T) => [x];

const m = makeArray("a");
console.log(m);

const makeArrayXY = <X, Y>(x: X, y: Y) => [x, y];
const xy = makeArrayXY(4, "2");

const m2 = makeArrayXY<string | null, number>("a", 4);

const makeWithTupleDef = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m3 = makeWithTupleDef<string | null>("4", 5);

// GENERICS EXTEND

const makeFullName = (obj: { firstName: string; lastName: string }) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const getFullName = makeFullName({
  firstName: "le",
  lastName: "tung",
});

const makeFullNameContrainWithGeneric = <
  T extends { firstName: string; lastName: string }
>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});
