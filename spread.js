const numbers = [54, 43, 34, 64, 645, 343, 34];
const getMax = Math.max(...numbers);
console.log(getMax);

const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65, 21, 34);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

const numbers2 = [...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);
