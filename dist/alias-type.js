"use strict";
//type IntersectionType = myTypeIdProps & myTypeName
let myTodo = {
    id: 10,
    firstname: "Albert",
    lastname: "cooooen",
    isConnect: false
};
const myDataType = (arg) => arg;
let myId = document.getElementById('myId');
const h1 = document.createElement('h1');
let myH1 = myId.appendChild(h1);
myH1.innerText = myTodo.firstname;
document.body.appendChild(myH1);
myId.innerHTML = myDataType(`${myTodo.firstname} 
    ${myTodo.lastname} ${myTodo.id} ${myTodo.isConnect}`);
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
//let docTwo = addUID("hello")
console.log(docOne.age);
const docThree = {
    uuid: 0,
    ressourceName: "person",
    data: { name: 'shaun' }
};
const docFour = {
    uuid: 0,
    ressourceName: "shopingList",
    data: ["test", "brred"]
};
console.log(docThree, docFour);
// Key Of
const course = {
    title: "titi",
    subTitle: "super",
    lessonCount: 100
};
function extractProperty(data, property) {
    return data[property];
}
const val = extractProperty(course, "title");
