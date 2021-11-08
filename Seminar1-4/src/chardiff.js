function f1(a, b) {
  if (a.length === b.length) {
    let nr1, nr2;
    nr1 = 0;
    nr2 = 0;
    for (let i = 0; i < a.length; i++) {
      let sw = 0;
      for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
          sw = 1;
        }
      }
      if (!sw) {
        nr1++;
      }
    }
    for (let i = 0; i < a.length; i++) {
      let sw = 0;
      for (let j = 0; j < b.length; j++) {
        if (b[i] === a[j]) {
          sw = 1;
        }
      }
      if (!sw) {
        nr2++;
      }
    }
    return nr1 + nr2;
  } else {
    return -1;
  }
}

console.log(f1("asd", "abs"));
