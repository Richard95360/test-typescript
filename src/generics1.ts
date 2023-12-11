
const echo =<T>(arg:T) : T => arg
echo("toto")
echo(23)
echo({})

const isObj = <T> (arg:T):boolean => {
    return (typeof arg ==='object' && !Array.isArray(arg) && arg  !== null)
}

console.log(isObj(true))
console.log(isObj('jhon'))
console.log(isObj([1,2,3]))
console.log(isObj({name:'jhon'}))
console.log(isObj(null))


const isTrue = <T>(arg:T) : {arg:T, is:boolean} => {
    if(Array.isArray(arg) && !arg.length) {
        return {arg, is: false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {arg, is:false}
    }
    return {arg, is: !!arg}
}

console.log(isTrue('rrrr'))
console.log(isTrue({coco: "dave"}))
console.log(isTrue([1,2,3]))
console.log(isTrue([]))
console.log(isTrue(NaN))
console.log(isTrue(false))
console.log(isTrue({}))

interface BoolCheck<T> {
    value: T,
    is:boolean
}

const checkBollValue = <T>(arg:T) : BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length) {
        return {value:arg, is: false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {value: arg, is:false}
    }
    return {value :arg, is: !!arg}
}

interface HasId {
    id:number
}

const processUser = <T extends HasId>(user: T):T => user

console.log(processUser({id: 1, name : 'dave'}))
console.log(processUser({id: 1, isLogin : false}))

const getUsersProperty = <T extends HasId, K extends keyof T>(user:T[],key:K):T[K][] => {
return user.map(user => user[key])
}


const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

console.log(getUsersProperty(usersArray, "email"))
console.log(getUsersProperty(usersArray, "username"))