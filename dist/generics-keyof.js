"use strict";
function pluck(items, key) {
    return items.map(item => item[key]);
}
const chien = [
    { name: "tintin", age: 12 },
    { name: "milou", age: 15 }
];
console.log(pluck(chien, "name"));
console.log(pluck(chien, "age"));
function sendEvent(name, data) {
    console.log([name, data]);
}
sendEvent("addToCart", { productId: "foo", quantity: 3, time: 5, user: 'ric' });
sendEvent("checkout", { time: 10, user: 'roc' });
