function identity1<T>(arg:T):T {
    return arg
}

const aa = identity1<number>(3)
const bb = identity1<string>("ric")
const cc = identity1<{}>({firstname:"ric",lastname: 'had'})

console.log(aa)
console.log(typeof aa)
console.log(bb)
console.log(cc)
console.log(typeof cc)

const identity2 = <T extends {firstname: string,lastname:string,age:number}>(arg:T):T => arg;

const one = identity2({firstname:"enculer",lastname:"salope",age:52}) 
console.log(one)
console.log(typeof one)

const objOne = {name: 'Bart'}
const objTwo = {age: 60}

function obInArray<N extends {name:string}, A extends {age:number}>(n: N,a:A) {
    let data :Array<{}> = []
        data.push(n,a)
    return data
}

const result = obInArray(objOne,objTwo)
console.log(result)