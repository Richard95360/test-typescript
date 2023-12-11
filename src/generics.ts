


type User<T> = T 

type SuperUser = Record<string, User<string[]| number[] >>

const userName = {name:["toto","titi"], age:[50,20]} satisfies SuperUser

console.log(userName.age)

type Identity<T> = (arg:T) => T

function contoleSize<T extends {length: number}>(arg: T):T {
    console.log(arg.length)
    return arg
}
const d = contoleSize(["3"])
function identity<T>(arg: T):T {
    return arg
}
function first<T>(arg: T[]):T {
    return arg[0]
}

const a = identity<number>(3)
const b =identity<string>("ric")
const c = first(["1","2"])

type UserName = {firstname:string, lastname:string};
type SuperUser1 = UserName['firstname']
type P = keyof UserName


interface GenericType<T, U> {
    id: T
    name: U
  }
  
  //function showType(args: GenericType<number, string>) {
   // console.log(args)
  //}
  
  //showType({ id: 1, name: "test" })
  // Output: {id: 1, name: "test"}
  
  function showTypeTwo(args: GenericType<string, string[]>) {
    console.log(args)
  }
  
  showTypeTwo({ id: "001", name: ["This", "is", "a", "Test"] })
  // Output: {id: "001", name: Array["This", "is", "a", "Test"]}
