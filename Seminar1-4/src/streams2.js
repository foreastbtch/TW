//Implementați un tip obiectual care implementează un șir crescător
//având ca elemente toate numerele pare pornind de la o valoare dată.
//Constructorul primește valoarea inițială a secvenței.
//Singura metodă este 'next' care calculează următoarea valoare din șir.
class Stream {
  #value;
  #nextValue;
  constructor(value, nextValue) {
    this.#value = value;
    this.#nextValue = nextValue;
  }
  get value() {
    return this.#value;
  }
  get next() {
    this.#value = this.#nextValue(this.#value);
    return this.#value;
  }
}
class NextIntegerStreamPar extends Stream {
  constructor(value) {
    if (value % 2 === 0) {
      super(value - 2, (value) => value + 2);
    } else {
      super(value - 1, (value) => value + 2);
    }
  }
}
const nextIntegerPar = new NextIntegerStreamPar(3);
for (let i = 0; i < 10; i++) {
  console.log(`nextInteger[${i}] = ${nextIntegerPar.next}`);
}
