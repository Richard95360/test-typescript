"use strict";
const cart = {
    name: 'ford',
    modele: 'escort',
    annee: 2022
};
const getCard = (obj, key) => obj[key];
//const getCard =<T,K extends keyof T> (obj:T , key: K):T[K] =>   obj[key]
getCard(cart, 'name');
getCard(cart, 'modele');
getCard(cart, 'annee');
const cartOne = [{
        name: 'ford',
        modele: 'escort',
        annee: 2022
    }];
function getCardOne(items, key) {
    return items.map(item => item[key]);
}
console.log(getCardOne(cartOne, "name"));
function showType(arg) {
    return arg;
}
showType({ id: 1, name: "ric" });
showType({ id: "ttt", name: "ric" });
