const laptops = [
  {
    brand: "HP",
    processor: "i5",
    ram: 8
  },
  {
    brand: "Lenovo",
    processor: "i5",
    ram: 16
  },
  {
    brand: "Acer",
    processor: "i5",
    ram: 8
  },
  {
    brand: "Asus",
    processor: "i7",
    ram: 8
  }
];
const key = "brand";
// const getSortedObjects = (array, key) => {
//   array.forEach((elem) => {
//     if (!element[key] || element[key] !== object[key]) {
//       result = true;
//     }
//   });
//   return array;
// };
const f = (array, key) => {
  array.sort((a, b) => {
    let x = a[key];
    let y = b[key];
    if (x > y) {
      return 1;
    } else {
      return -1;
    }
  });
  return array;
};
// Urmăriți acest videoclip pentru a vedea cum
// se manipulează un array de obiecte.
// După ce ați testat exemplul,
// scrieți o funcție care primește un array de obiecte
// și un string și returnează array-ul sortat
// după cheia specificată prin string.
console.log(f(laptops, key));
