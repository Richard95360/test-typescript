"use strict";
const choices = ['NO', 'YES'];
const processAnswer = (answer) => {
    if (typeof answer === 'number') {
        console.log(choices[answer]);
    }
    else if (typeof answer === 'boolean') {
        if (answer) {
            console.log(choices[1]);
        }
        else {
            console.log(choices[0]);
        }
    }
};
processAnswer(true); // Prints "YES"
processAnswer(0);
function double(x) {
    if (typeof x === 'string') {
        return x.repeat(2);
    }
    else {
        return x * 2;
    }
}
