"use strict";
//e keyofl'opérateur prend un type d'objet et produit une chaîne ou une union littérale numérique de ses clés.
const myVoit = (voit, prop) => {
    return voit[prop];
};
const myVoitProperty = (voit, prop) => {
    return voit[prop];
};
let ford = {
    name: "ford",
    modele: "escorte",
    annee: 2023,
    voiture: ["ford", "renauld", "opel"]
};
const ford1 = myVoit(ford, "name");
console.log(ford1);
const for2 = myVoit(ford, "modele");
console.log(for2);
const for3 = myVoit(ford, "annee");
console.log(for3);
const ford4 = myVoit(ford, "voiture");
console.log(ford4.map(f => f));
var ColorsEnum;
(function (ColorsEnum) {
    ColorsEnum["white"] = "#ffffff";
    ColorsEnum["black"] = "#00000";
})(ColorsEnum || (ColorsEnum = {}));
const employee = {
    name: "Jhon",
    age: 25,
    address: "rue de paris"
};
console.log(employee.age);
