"use strict";
const userData = {
    id: 1,
    data: { firstname: 'ric', age: 25 },
};
const userData1 = {
    id: 1,
    data: ['ric', 'roc']
};
const userData2 = {
    id: 1,
    data: "admin"
};
const userData3 = {
    id: 1,
    data: { id: 12, name: "admin", role: "moderateur" }
};
console.log(userData3.data.name);
