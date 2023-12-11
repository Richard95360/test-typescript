
interface DogInfo {
    age:number,
    race:string
}

type DogsName = "Tintin" | "Milou" | "Rack";


let dogs:Record<DogsName, DogInfo> = {
    Tintin: {age:15, race:"berger Allemand"},
    Milou: {age: 8, race:"chico"},
    Rack: {age:15, race: "boxer"}
} 

dogs.Rack