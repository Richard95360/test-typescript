import { never } from "zod";


type SomeType = number
type MyContionalType = SomeType extends  string ? string : null;

function someFunction<T>(value:T) {
    type A = T extends boolean 
    ? 'TYPE A' 
    : T extends string
     ?  'TYPE B'
      : T extends number 
     ? 'TYPE C'
      : 'TYPE D'

    const someOtherFunction = (
        someArg: T extends boolean ? 'TYPE A'  : 'TYPE B' 
        ) => {
            const a:  'TYPE A'  |  'TYPE B'  = someArg
        }
        return someOtherFunction;
}

const resultat = someFunction(true);

type StringOrNot<T> = T extends  string ? string: never;

type AUnion = string | boolean | never;

//type Exclude<T, U> = T extends U ? never : T;
type ResultType = Exclude< 'a' | 'b' | 'c', 'a' | 'b'>;

type MyType<T> = [T] extends  [string | number] ? T : never;
type MyResult = MyType<string | number>

type InferSomeThing<T> = T extends infer U ? U : any
type Infereed =  InferSomeThing<"I am a string">

type InferSomeThing2<T> = T extends {a: infer A, b: infer B} ? A  &  B : never
type Infereed2 = InferSomeThing2<{
    a:{someAProp: 1};
     b: {someBProp:"B"};
    }>

    //type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
    type MtFuncReturnValue = ReturnType<() => true>
