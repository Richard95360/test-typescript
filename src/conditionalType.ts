

type HtmlAttributes = {
    img: {
        alt:string
    }
    input:{
        type?: 'text' | 'number',
        name?: string
    },
    textarea: {
        name?:string,
        cols?:number
    }
}

type HtmlNode<TagName> = {
    tagName: TagName
    class?: string
    id?:string
    attributes?: TagName extends keyof HtmlAttributes ? HtmlAttributes[TagName] : never
}
type HtmlShapes = {
    [key in keyof HtmlAttributes]: HtmlNode<key>
}

type valueOf<T> = T[keyof T]

type HtmlShape = valueOf<HtmlShapes>

type HtmlShapeInline = valueOf<{
    [Key in keyof HtmlAttributes] : HtmlNode<Key>
}>

const img:HtmlShapeInline = {
    tagName: 'img',
    class: '.demo',
    attributes: {
        alt: 'demo'
    }
}
const  input:HtmlShapeInline = {
    tagName: 'input',
    attributes: {
        name: 'demo',
        type:"text"
    }
}

const textarea: HtmlShape = {
    tagName: 'textarea',
    attributes:{

    }
}