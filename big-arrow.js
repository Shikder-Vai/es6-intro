//basic arrow function
const sum = (num1, num2) => num1 + num2;
const getSum = sum(30, 20);
// console.log(getSum);

//multiple parameter arrow function
const multiply = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiply(5, 5, 5));

//single parameter arrow functon
const fivTimes = (num) => num * 5;
const getValue = fivTimes(5);
//If arrow function has single perameter then you don't have to use braked
const tenTime = (num) => num * 10;
const getValue = tenTime(10);
// console.log(getValue);

//anonymous arrow functon
const getName = () => "Mann Brandon";
const name = getName();
// console.log(name);

//multiline arrow function
const getResults = (x, y) => {
  const sum = x + y;
  const multiply = x * y;
  const output = sum + multiply;
  return output;
};
const result = getResults(5, 5);
console.log(result);
