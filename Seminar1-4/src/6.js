const dictionary = ["este"];
const sampleText = "JS este minunat";
const cenzura = (text, dictionary) => {
  let res = "";
  let sw = 0;
  let str = "";
  const a = text.split(" ");
  for (let i = 0; i < a.length; i++) {
    if (dictionary.indexOf(a[i]) !== -1) {
      str = "";
      str = a[i][0];
      for (let j = 1; j < a[i].length - 1; j++) {
        str += "*";
      }
      str += a[i][a[i].length - 1];
      sw = 1;
    }
    if (!sw) {
      res += a[i];
      res += " ";
    } else {
      res += str;
      res += " ";
      sw = 0;
    }
  }
  return res;
};
console.log(cenzura(sampleText, dictionary));
