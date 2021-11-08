const sampleArray = [1, 2, 3, 4, 5];

const reduce = (array) => {
  let result = 0;
  for (const elem of array) {
    result += elem;
  }
  return result;
};

console.log(reduce(sampleArray));
