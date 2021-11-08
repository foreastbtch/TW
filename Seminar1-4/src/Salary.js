//implementați funcția increaseSalary care primește ca parametrii un array
//de salarii și un număr reprezentând procentul cu care se vor mări (ex 10).
//Funcția aruncă excepții dacă primul parametru nu este un array
//sau al doilea parametru nu este un număr.
const increaseSalary = (array, procent) => {
  if (Array.isArray(array) && Number.isInteger(procent)) {
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i] + (array[i] * procent) / 100;
    }
  } else {
    throw new Error("... error");
  }
};

let array = [10, 20, 30, 40, 50];
let procent = 10;

try {
  increaseSalary(array, procent);
  console.log(array);
  increaseSalary(procent, array);
} catch (error) {
  console.warn(error);
}
