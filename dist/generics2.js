"use strict";
function identity1(arg) {
    return arg;
}
const aa = identity1(3);
const bb = identity1("ric");
const cc = identity1({ firstname: "ric", lastname: 'had' });
console.log(aa);
console.log(typeof aa);
console.log(bb);
console.log(cc);
console.log(typeof cc);
const identity2 = (arg) => arg;
const one = identity2({ firstname: "enculer", lastname: "salope", age: 52 });
console.log(one);
console.log(typeof one);
const objOne = { name: 'Bart' };
const objTwo = { age: 60 };
function obInArray(n, a) {
    let data = [];
    data.push(n, a);
    return data;
}
const result = obInArray(objOne, objTwo);
console.log(result);
