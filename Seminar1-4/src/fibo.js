const checkFib = (n) => {
  if (n === 1) {
    return 0;
  }
  let a = 0,
    b = 1,
    c;
  let nr = 2;
  while (nr < n) {
    c = a + b;
    a = b;
    b = c;
    nr++;
  }
  return b;
};
if (process.argv.length < 3) {
  console.log("not enough params");
} else {
  console.log(checkFib(parseInt(process.argv[2], 10)));
}
