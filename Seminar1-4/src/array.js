function f(a) {
  //implementează o funcție care primește ca parametru o listă
  //de numere și returnează un array conținând acele numere.
  let b = [];
  for (var i = 0; i < a.length; i = i + 2) {
    b.push(parseInt(a[i], 10));
  }
  return b;
}

console.log(f("1,2,3,4,5,6,9,0"));
