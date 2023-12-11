interface Cart {
    name?:string,
    model?:string,
    annee?: number
}
// le type required t'oblige à mettre toutes les données
let  myCar: Required<Cart> = {
    name: "ford",
    model: "focus",
    annee: 2020
} ;
