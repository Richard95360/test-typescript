
type myTypeIdProps = {
    id:number
}

type myTypeName ={
    firstname: string
    lastname:string
    isConnect:boolean
} & myTypeIdProps

//type IntersectionType = myTypeIdProps & myTypeName
let myTodo:myTypeName = {
    id: 10,
    firstname: "Albert",
    lastname: "cooooen",
    isConnect:false
}

const  myDataType = <T> (arg:T):T => arg


let myId = document.getElementById('myId') as HTMLDivElement

 const h1 = document.createElement('h1')

 let myH1 = myId.appendChild(h1) as HTMLElement

myH1.innerText = myTodo.firstname;
document.body.appendChild(myH1)

myId.innerHTML =  myDataType(
    `${myTodo.firstname} 
    ${myTodo.lastname} ${myTodo.id} ${myTodo.isConnect}`) 

const addUID =<T extends {name: string}> (obj: T) => {
    let uid = Math.floor(Math.random() * 1000)
    return {...obj, uid}
}

let docOne = addUID({name: 'yoshi', age:40});
//let docTwo = addUID("hello")

console.log(docOne.age)

interface Ressource<T> {
    uuid: number;
    ressourceName: string;
    data: T;
}



const  docThree:Ressource<object> = {
    uuid: 0,
    ressourceName: "person",
    data: {name: 'shaun'}
}

const docFour:Ressource<string[]> ={
    uuid: 0,
    ressourceName: "shopingList",
    data: ["test","brred"]
}
console.log(docThree, docFour)

type Course = {
   title: string,
   subTitle:string,
   lessonCount:100
}

// Key Of
const course:Course ={
    title: "titi",
    subTitle: "super",
    lessonCount: 100
}

type CourseKey = keyof  Course;

function extractProperty<T , K extends keyof  T>(data:T,property:K ) {
    return data[property];
}
const val = extractProperty<Course, CourseKey>(course, "title")
