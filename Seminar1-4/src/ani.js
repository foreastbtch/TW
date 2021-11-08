const ani = [
  1990,
  2004,
  2003,
  2000,
  1987,
  1945,
  1967,
  1977,
  2001,
  2002,
  2014,
  2010
];
const anCurent = 2021;
const filtruAni = (ani, anCurent) =>
  ani.filter((an) => anCurent - an >= 18).map((x) => anCurent - x);

console.log(filtruAni(ani, anCurent));
