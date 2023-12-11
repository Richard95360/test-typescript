  let Person = [
    {id:1,firstname:"richard",lastname:"haddad", age:61},
    {id:2,firstname:"Jean",lastname:"benat", age:61},
    {id:3,firstname:"Alain",lastname:"maous", age:61}
]


const myPerson = <Obj extends {}>(obj:  Obj) : (keyof Obj)[]=> {
    return Object.keys(obj) as  (keyof Obj)[];
};
myPerson(Person).map((key) => {
    console.log(Person[key]);
})

console.log(Person.map(p => p))








