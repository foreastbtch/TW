//implementați metoda 'times' pe tipul Number,
//astfel încât 3.times(() => {}) să execute funcția de 3 ori.
Number.prototype.times = function (f) {
  let nr = this.valueOf();
  for (let i = 0; i < nr; i++) {
    f();
  }
};
function fct() {
  console.log("ceva");
}
let nr = 4;
nr.times(fct);
