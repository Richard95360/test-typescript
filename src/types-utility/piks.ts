//Construit un type en choisissant l'ensemble de propriétés Keys(corres littérales ou union de littéraux de cordes) à partir de Type

interface Todo {
    title:string,
    description:string,
    completed:boolean
}

type TodoPreview = Pick<Todo, "title" | "description">

const todo: TodoPreview = {
    title: "Clean room",
    description: "belle"
}

type TodoInfo = Omit<Todo, "completd" | "description">

let todoInfo:TodoInfo = {
    title: "ok",
    completed: false
}