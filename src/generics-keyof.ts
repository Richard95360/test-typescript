function pluck<DataType , KeyType extends keyof DataType>(
    items:DataType[],  
    key:  KeyType
    ):DataType[KeyType] []{
    return items.map(item => item[key])
}

const chien = [
    {name: "tintin", age: 12},
    {name: "milou", age: 15}
] 

console.log(pluck(chien, "name"))
console.log(pluck(chien, "age"))

interface BaseEvent {
    time:number;
    user: string;
} 

interface EventMap {
    addToCart: BaseEvent & {quantity: number, productId: string}
    checkout: BaseEvent
}

function sendEvent<Name extends  keyof EventMap>(
    name:Name,
     data:  EventMap[Name]) {
    console.log([name, data])
}

sendEvent("addToCart", {productId:"foo",quantity:3,time:5,user:'ric'})
sendEvent("checkout", {time:10, user:'roc'})