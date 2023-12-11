"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
const obj = {
    person: {
        name: {
            first: 'Bobby',
            last: 'Hadz',
        },
        address: {
            country: 'Chile',
            city: 'Santiago',
        },
    },
};
const copy = (0, lodash_clonedeep_1.default)(obj);
console.log(copy);
