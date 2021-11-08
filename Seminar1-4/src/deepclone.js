//Implementați o funcție care face deep clone unui obiect.
//Funcția creează o copie a întregii structuri a obiectului,
//la o adâncime arbitrară.
class A {
  constructor(nume, prenume, varsta, note) {
    this.nume = nume;
    this.prenume = prenume;
    this.varsta = varsta;
    this.note = [];
    for (let i = 0; i < note.length; i++) {
      this.note.push(note[i]);
    }
  }
}

let a1 = new A("Andrei", "Ion", 22, [10, 9, 10, 8]);
//console.log(a1);

const deepClone = (object1, object2) => {
  object2.nume = object1.nume;
  object2.prenume = object1.prenume;
  object2.varsta = object1.varsta;
  object2.note = [];
  for (let i = 0; i < object1.note.length; i++) {
    object2.note.push(object1.note[i]);
  }
};
let a2 = new A("Maria", "Maria", 12, [4, 4, 4, 4, 4]);
//console.log(a2);

//a2 = a1;
deepClone(a1, a2);
a1.nume = "ASD";
console.log(a1);
console.log(a2);
