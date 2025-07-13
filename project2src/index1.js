const { add, sub } = require("./index2.js");

const firstNumber = 2;
const secondNumber = 3;

console.log(
  `The sum of ${firstNumber} & ${secondNumber} is: ${add(
    firstNumber,
    secondNumber
  )}`
);
console.log(
  `The difference of ${firstNumber}& ${secondNumber} is: ${sub(
    firstNumber,
    secondNumber
  )}`
);
