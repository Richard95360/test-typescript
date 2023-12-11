"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
console.log(cats.mordred);
function sendData(a, b) {
    return {
        a,
        b
    };
}
function sendDataNumber(...arg) {
    const myData = sendData(...arg);
    console.log(JSON.stringify(myData));
}
sendDataNumber(20, 30);
let isNoon = false;
function greeter(name) {
    if (isNoon) {
        return "Bonsoir, " + name;
    }
    return "Bonjour, " + name;
}
function toggleNoon() {
    isNoon = !isNoon;
}
const bouton = document.getElementById("button");
const display = document.getElementById('display');
bouton.addEventListener('click', () => {
    toggleNoon();
    display.innerHTML = greeter(myName);
    if (!isNoon)
        display.style.color = "green";
    else
        display.style.color = "red";
});
let myName = "Ric Had";
display.innerHTML = greeter(myName);
const employee = {
    name: 'Bobby Hadz',
    age: 30,
    country: 'Chile',
};
const btn = document.getElementById('btn');
const person = {
    id: 1,
    name: 'Bobby Hadz',
    country: 'Germany',
    onClick(n) {
        console.log(`Je suis  ${n}`);
    },
};
btn.addEventListener('click', () => {
    person.onClick('Richard');
});
let color = ['red', 'green', 'blue'];
const car = {
    color: 'green',
    seats: 5
};
console.log(car.color);
