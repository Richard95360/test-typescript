class DataBase<T extends string | number | object> {
    data: Array<T> = []
    saveData(val:T) {
        this.data.push(val)
    }
    getAllData() {
        return [...this.data]
    }
}

const stringData = new DataBase<string>();
stringData.saveData("toto")
console.log(stringData.getAllData())

const numberData = new DataBase<number>();
numberData.saveData(50)
console.log(numberData.getAllData())

const objData = new DataBase<object>();
objData.saveData({name: "toto", age:10})

console.log(objData.getAllData());