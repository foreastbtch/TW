function addToArray(array, ...args) {
  //let args = arguments;
  //let array = args[0];
  for (var i = 0; i < args.length; i++) {
    array.push(args[i]);
  }
  return array;
}

let array = ["a"];
console.log(addToArray(array, "b", "c").join(", "));
