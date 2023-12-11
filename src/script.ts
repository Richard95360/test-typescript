import {z} from 'zod'

const UserSchema = z.array(z.object({
    name: z.string(),
    properties: z.object({
        age: z.number()
    })
}))

const demo1 = () => {
    const json = '[{"name": "test"},{"name":"tes2", "properties": {"age":20}}]'

    try {
        const parseJson  =  UserSchema.parse(JSON.parse(json));
    
        console.log(parseJson);
        const totalAge = parseJson.reduce((acc, curr) => acc +curr.properties.age , 0);
    
        console.log({totalAge})
        
    } catch  {
        console.log("Invalid Json")
    }
}

demo1()

