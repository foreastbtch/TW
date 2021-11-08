//implementați o variantă recursiva a unei funcții de exponențiere.
//Atât rezultatele finale cât și cele intermediare vor fi memoizate.
function exp() {
  const cache = [0, x];
  const f = (x, pow) => {
    if (pow < cache.length) {
      console.log("found " + pow);
      return cache[pow];
    } else {
      console.log("calculated " + pow);
      cache[pow] = f(x, pow - 1) * x;
      return cache[pow];
    }
  };
  return f;
}
let x = 4;
const f = exp();

console.log(f(x, 4));
console.log(f(x, 2));
console.log(f(x, 3));
console.log(f(x, 5));
