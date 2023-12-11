import { number } from "zod";

interface CatInfo {
    age:number;
    breed:string;
}

type CateName = "miffy"  |  "boris"| "mordred";

const cats:Record<CateName, CatInfo> = {
      miffy: {age: 10, breed: "Persian"},
      boris: { age: 5, breed: "Maine Coon" },
      mordred: { age: 16, breed: "British Shorthair" },

}

console.log(cats.mordred)

function sendData(a:number,b:number) {
    return {
        a,
         b

    }

}
type FetchParams = Parameters<typeof sendData>
type Data = ReturnType<typeof  sendData>

function sendDataNumber(...arg:FetchParams) {
    const myData = sendData(...arg)
    console.log(JSON.stringify(myData))
   
}

sendDataNumber(20,30)


let isNoon :boolean = false
function greeter(name: string) {
    if(isNoon) {
        return "Bonsoir, " + name

    }
    return "Bonjour, " + name
}

function toggleNoon() {
    isNoon = !isNoon
}



const bouton = document.getElementById("button") as HTMLButtonElement
const display =  document.getElementById('display')  as HTMLParagraphElement
bouton.addEventListener('click' ,  () => {
    toggleNoon()
    display.innerHTML = greeter(myName)

    if(!isNoon) display.style.color = "green" 
    else  display.style.color = "red"
})
let myName = "Ric Had"

display.innerHTML = greeter(myName);


type TypeA = {
  name: string;
};

type TypeB =  {
  age: number;
} & TypeA;

type TypeC =  {
  country: string;
} & TypeB;

const employee: TypeC = {
  name: 'Bobby Hadz',
  age: 30,
  country: 'Chile',
};

type Employee = {
    id: number;
    name: string;
    onClick: (n:string) => void
  };
  
  // 👇️ use intersection type
  type Person =  {
    country: string;
  }& Employee ;
  
  const btn = document.getElementById('btn') as HTMLButtonElement
  const person: Person = {
    id: 1,
    name: 'Bobby Hadz',
    country: 'Germany',
    onClick(n) {
        console.log(`Je suis  ${n}`)
    },
  } 

  btn.addEventListener('click', () => {
     person.onClick('Richard')
  })


  
  let color = ['red' , 'green', 'blue'] as const

  const car = {
    color: 'green',
    seats: 5
} as const
 
console.log(car.color)


