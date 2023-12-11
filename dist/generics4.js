"use strict";
class DataBase {
    constructor() {
        this.data = [];
    }
    saveData(val) {
        this.data.push(val);
    }
    getAllData() {
        return [...this.data];
    }
}
const stringData = new DataBase();
stringData.saveData("toto");
console.log(stringData.getAllData());
const numberData = new DataBase();
numberData.saveData(50);
console.log(numberData.getAllData());
const objData = new DataBase();
objData.saveData({ name: "toto", age: 10 });
console.log(objData.getAllData());
