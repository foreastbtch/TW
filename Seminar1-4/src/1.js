const f = (arr, nr) => {
  return arr.filter((x) => x % nr === 0).reduce((p, c) => p + c, 0);
};

const numbers = [1, 2, 3, 6, 8, 9, 3, 45, 55, 33, 22, 89, 90];
const nr = 2;
console.log(f(numbers, nr));
