//7 - (Opțional) Dat fiind un array de numere scrieți
// o funcție pentru a calcula media lor folosind reduce?

const f = (array) => {
  return (
    array.reduce((p, c) => {
      return p + c;
    }, 0) / array.length
  );
};
let arr = [1, 7, 6, 4, 10, 2, 1];
console.log(f(arr));
