// CHALLENGE 1
// https://edabit.com/challenge/4gzDuDkompAqujpRi
// Add up the Numbers from a Single Number

// loop - O(n)
// function addUp(n) {
//   let sum = 0;

//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }

//   return sum;
// }

// O(1)
// const addUp = (n) => n * (n + 1) / 2

// recursion
// function addUp(n) {
//   if (n === 1) return 1;
//   return n + addUp(n - 1);
// }

// console.log(addUp(4));

// CHALLENGE 2
// https://javascript.info/recursion#calculate-factorial
// Calculate factorial
// loop
// function factorial(number) {
//   let sum = 1;
//   for (let i = 1; i <= number; i++) {
//     sum*=i;
//   }

//   return sum;
// }

// recursion
// function factorial(number) {
//   if (number === 1) return number;
//   return number * factorial(number - 1);
// }

// console.log(factorial(3));

// CHALLENGE 3
// https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
// Matchstick Houses

// O(n)
// function matchHouses(houses) {
//   if (houses <= 0) return 0;

//   let matchSticks = 0;
//   let increaseBy = 6;

//   while (houses) {
//     matchSticks += increaseBy;
//     increaseBy = 5;
//     houses--
//   }

//   return matchSticks;
// }

// O(1)
// function matchHouses(houses) {
//   if (houses <= 0) return 0;

//   return houses * 5 + 1
// }

// console.log(matchHouses(2))

// CHALLENGE 4
// https://edabit.com/challenge/Q3n42rEWanZSTmsJm
// Find the Smallest and Biggest Numbers
// O(n)
// function minMax(arr) {
//   arr.sort((a, b) => a - b);
//   return [arr[0], arr[arr.length - 1]];
// }

// O(2n)
// const minMax = (arr) => [Math.min(...arr), Math.max(...arr)]

// console.log(minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]))

// Check if One Array can be Nested in Another
// https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj

const canNest = (arr1, arr2) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  return arr2.at(0) < arr1.at(0) && arr1.at(-1) < arr2.at(-1);
};

// console.log(canNest([1, 2, 3, 4], [2, 3]));
