function f(a, b) {
  let c = [];
  for (var i = 0; i < a.length; i++) {
    c.push(a[i]);
    c.push(b[i]);
  }
  return c;
}

console.log(f("asd", "qwe"));
