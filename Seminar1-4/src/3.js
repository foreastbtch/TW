const sampleArray = [1, 2, 3, 4, 5];

const map = (array, transformation) => {
  const result = [];
  for (const elem of array) {
    result.push(transformation(elem));
  }
  return result;
};

console.log(map(sampleArray, (x) => x * 2));
