type Voiture ={
    name:string,
    modele: string
    annee:number
    voiture: []
}

type VoitureKey = keyof Voiture
//e keyofl'opérateur prend un type d'objet et produit une chaîne ou une union littérale numérique de ses clés.
const myVoit =<T, K extends keyof T> (voit:T, prop:  K) => {
    return voit[prop]
}
const myVoitProperty =<T> (voit:T, prop:  keyof T) => {
    return voit[prop]
}



let ford = {
    name: "ford",
    modele:"escorte",
    annee:2023,
    voiture:["ford", "renauld","opel"]
}



const ford1 = myVoit(ford, "name")
console.log(ford1)
const for2 = myVoit(ford,"modele")
console.log(for2)
const for3 = myVoit(ford,"annee")
console.log(for3)

const ford4 = myVoit(ford, "voiture")

console.log(ford4.map(f => f))

enum ColorsEnum {
    white = '#ffffff',
    black = '#00000'
}

type Colors = keyof typeof ColorsEnum

interface Employee {
    name:string,
    age:number,
    address: string
}

type Optional<T> = {
  [K in keyof T]?:T[K] 
} 

type OptinalEmployee = Optional<Employee>

type OptionalEmployee = {
   readonly [K in keyof Employee]: Employee[K];
}

const employee:OptionalEmployee = {
    name: "Jhon",
    age:25,
    address:"rue de paris"
} satisfies OptionalEmployee


console.log(employee.age)