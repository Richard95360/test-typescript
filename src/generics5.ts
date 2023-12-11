const cart = {
    name: 'ford',
    modele: 'escort',
    annee: 2022
} 

type  MyCartType =(typeof cart) ;
type MyCardKeys = (keyof MyCartType);

const getCard = (obj:MyCartType , key: MyCardKeys) =>   obj[key]
//const getCard =<T,K extends keyof T> (obj:T , key: K):T[K] =>   obj[key]

getCard(cart , 'name')
getCard(cart , 'modele')
getCard(cart , 'annee')

const cartOne =[ {
    name: 'ford',
    modele: 'escort',
    annee: 2022
}]

function getCardOne<T , K extends keyof T>(
    items:T[],  
    key:  K
    ):T[K] []{
    return items.map(item => item[key])
}

console.log(getCardOne(cartOne, "name"))


type StringMap<T> = {
    [P in keyof T]: string | number
}

function showType(arg:StringMap<{id: number, name:string}>) {
    return arg
}
showType({id:1,name:"ric"})
showType({id:"ttt",name:"ric"})