let sayHello2 = (name) => {
  let aux = name[0];
  for (var i = 1; i < name.length; i++) {
    aux += name[i];
  }
  return aux;
};
console.log(sayHello2(["a", "b", "c", "d", "e", "f"]));
