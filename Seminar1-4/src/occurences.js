// function occ(text, character) {
//   let count = 0;
//   for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === character) {
//       count++;
//     }
//   }
//   return count;
// }

// function occ(text, character) {
//   return text.split(character).length - 1;
// }

let occ = (text, character) => text.split(character).length - 1;

console.log(occ("Ana are mere.", "e"));
