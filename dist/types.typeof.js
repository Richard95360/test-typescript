"use strict";
const person = {
    name: 'ric',
    age: 56,
    email: 'ric@gmail.com'
};
function getProperty(obj, key) {
    return obj[key];
}
getProperty(person, "email");
const myUser = {
    name: 'Ric',
    age: 60
};
function getMyUser(param, key) {
    return param[key];
}
function getMyUserGenerics(param, key) {
    return param[key];
}
console.log(getMyUserGenerics({ name: 'Richar', age: 60 }, 'name'));
const myUserData = {
    name: "Ric",
    age: 0
};
console.log(myUserData);
const myCuisine = {
    name: 'total',
    description: "allo"
};
const myCuisine1 = {
    name: 'total',
    description: false
};
const myCuisine2 = {
    name: 'total',
    description: { ingr: "sel", id: 3 }
};
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
//identityThree(3)
function identityFour(val) {
    return val;
}
