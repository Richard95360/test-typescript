"use strict";
const userName = { name: ["toto", "titi"], age: [50, 20] };
console.log(userName.age);
function contoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const d = contoleSize(["3"]);
function identity(arg) {
    return arg;
}
function first(arg) {
    return arg[0];
}
const a = identity(3);
const b = identity("ric");
const c = first(["1", "2"]);
//function showType(args: GenericType<number, string>) {
// console.log(args)
//}
//showType({ id: 1, name: "test" })
// Output: {id: 1, name: "test"}
function showTypeTwo(args) {
    console.log(args);
}
showTypeTwo({ id: "001", name: ["This", "is", "a", "Test"] });
// Output: {id: "001", name: Array["This", "is", "a", "Test"]}
