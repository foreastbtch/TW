const words = [
  "fox",
  "wolf",
  "snake",
  "crocodile",
  "lion",
  "cat",
  "crocodile",
  "horse"
];
const forbiddenWord = "crocodile";
const minLength = 4;

// const filterWords = (words, forbiddenWord, minLength) => {
//   const result = words.filter((word) => {
//     if (word !== forbiddenWord && word.length >= minLength) {
//       return true;
//     }
//     return false;
//   });
//   return result;
// };

const filterWords = (words, forbiddenWord, minLength) =>
  words.filter((word) => word !== forbiddenWord && word.length >= minLength);

console.log(filterWords(words, forbiddenWord, minLength));
