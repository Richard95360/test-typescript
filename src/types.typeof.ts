


const person = {
    name: 'ric',
    age: 56,
    email:'ric@gmail.com'
}

 
type PersonKeys = keyof typeof person;

function getProperty(obj: typeof person, key: keyof typeof person) {
     return obj[key]
}

getProperty(person, "email")

const  myUser=  {
    name: 'Ric',
    age:60
}

//type UserKeys = keyof  MyUser
//type MyUserType = keyof typeof myUser
type MyUserType = typeof myUser
type UserKeys = keyof  MyUserType


function getMyUser(param: typeof myUser, key: keyof typeof myUser) {
    return param[key]
}

function getMyUserGenerics<T extends typeof myUser, K extends keyof  T>(param: T, key:  K) {
    return param[key]
}

console.log(getMyUserGenerics({name: 'Richar', age: 60},'name'))

const  myUserData  = {
    name: "Ric",
    age: 0
} satisfies MyUserType

console.log(myUserData)

type Cuisine<T> = {
    name:string,
    description: T
}

const myCuisine:Cuisine<string> ={
    name: 'total',
    description: "allo"
}
const myCuisine1:Cuisine<boolean> ={
    name: 'total',
    description: false
}
const myCuisine2:Cuisine<object> ={
    name: 'total',
    description: {ingr:"sel", id:3}
}


function identityOne(val: boolean | number) : boolean | number {
    return val
}
function identityTwo(val: any) : any {
    return val
}
function identityThree<Type>(val: Type) : Type {
    return val
}
//identityThree(3)

function identityFour<T>(val: T) : T {
    return val
}

type Personne = {
    name:string,
    age:number
    location:string
}

