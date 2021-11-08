const sampleString = "the quick brown fox jumps over the lazy dog";
const getCounts = (text) => {
  const result = {};
  let nr = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      nr++;
      if (text[i] in result) {
        result[text[i]]++;
      } else {
        result[text[i]] = 1;
      }
    }
  }
  for (let c in result) {
    result[c] /= nr;
  }
  return result;
};

console.log(getCounts(sampleString));
