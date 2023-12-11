"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const UserSchema = zod_1.z.array(zod_1.z.object({
    name: zod_1.z.string(),
    properties: zod_1.z.object({
        age: zod_1.z.number()
    })
}));
const demo1 = () => {
    const json = '[{"name": "test"},{"name":"tes2", "properties": {"age":20}}]';
    try {
        const parseJson = UserSchema.parse(JSON.parse(json));
        console.log(parseJson);
        const totalAge = parseJson.reduce((acc, curr) => acc + curr.properties.age, 0);
        console.log({ totalAge });
    }
    catch (_a) {
        console.log("Invalid Json");
    }
};
demo1();
