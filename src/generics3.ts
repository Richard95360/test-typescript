
interface UserOne <T> {
        id:number,
        data: T 
}

const userData: UserOne<object>={
    id:1,
    data: {firstname:'ric',   age:25},
}
const userData1: UserOne<string[]>={
    id:1,
    data:['ric', 'roc'] 
}
const userData2: UserOne<string>={
    id:1,
    data:"admin"
}
const userData3: UserOne<{id:number, name:string, role:string}>={
    id:1,
    data:{id: 12,name:"admin", role:"moderateur"}
}

console.log(userData3.data.name)

type MyObj = { name: string, age: number; };

