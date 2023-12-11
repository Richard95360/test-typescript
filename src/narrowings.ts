const choices: [string, string] = ['NO', 'YES'];
const processAnswer = (answer: number | boolean) => {
  if (typeof answer === 'number') {
    console.log(choices[answer]);
  } else if (typeof answer === 'boolean') {
    if (answer) {
      console.log(choices[1]);
    } else {
      console.log(choices[0]);
    }
  }
}
processAnswer(true);    // Prints "YES"
processAnswer(0); 

function double(x:string | number) {
    if(typeof x === 'string') {
        return x.repeat(2)
    } else {
        return x * 2
    }
}