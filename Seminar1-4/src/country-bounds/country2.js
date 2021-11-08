//implementați o funcție care obține
//lista avioanelor de deasupra României.
const fetch = require("node-fetch");

async function getObjectFromUrl(url) {
  const response = await fetch(url);
  const text = await response.text();
  return JSON.parse(text);
}

async function getCountryBounds(country) {
  const object = await getObjectFromUrl(
    `https://nominatim.openstreetmap.org/search?country=${country}&format=json`
  );
  return {
    minLatitude: object[0].boundingbox[0],
    maxLatitude: object[0].boundingbox[1],
    minLongitude: object[0].boundingbox[2],
    maxLongitude: object[0].boundingbox[3]
  };
}

class Country {
  constructor(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
}

let romania = new Country(0, 0, 0, 0);
async function main() {
  const bounds = await getCountryBounds("Romania");
  console.log(bounds);
  romania.a = bounds.minLatitude;
  romania.b = bounds.maxLatitude;
  romania.c = bounds.minLongitude;
  romania.d = bounds.maxLongitude;
  let plane1 = new Plane("Ryan Air", "Istanbul", "London", 44, 25);
  let plane2 = new Plane("Qatar Airways", "Barcelona", "Doha", 47, 20);
  let plane3 = new Plane("Turkish Airlines", "Ankara", "Amsterdam", 44, 29);
  let plane4 = new Plane("Tarom", "Bucharest", "Rome", 44, 25);
  let plane5 = new Plane("British Airways", "Manchester", "Lisbon", 49, 4);
  let lista = [];
  lista.push(plane1, plane2, plane3, plane4, plane5);
  console.log(getPlanes2(romania, lista));
}

// function f(s) {
//   console.log(s);
// }
// f("ceva");

main();

function getPlanes(a, b, c, d, a1, b1) {
  console.log(a, b, c, d, a1, b1);
  if (a1 < a || a1 > b || b1 < c || b1 > d) {
    return false;
  }
  return true;
}

function getPlanes2(country, planes) {
  let lista = [];
  for (let plane of planes) {
    if (
      getPlanes(country.a, country.b, country.c, country.d, plane.a, plane.b)
    ) {
      lista.push(plane);
    }
  }
  return lista;
}

class Plane {
  constructor(name, departure, destination, a, b) {
    this.name = name;
    this.departure = departure;
    this.destination = destination;
    this.a = a;
    this.b = b;
  }
}

// async function f2() {
//   await main();
//   console.log("---------------------------");
//   let plane1 = new Plane("Ryan Air", "Istanbul", "London", 44, 25);
//   let plane2 = new Plane("Qatar Airways", "Barcelona", "Doha", 47, 20);
//   let plane3 = new Plane("Turkish Airlines", "Ankara", "Amsterdam", 44, 29);
//   let plane4 = new Plane("Tarom", "Bucharest", "Rome", 44, 25);
//   let plane5 = new Plane("British Airways", "Manchester", "Lisbon", 49, 4);
//   let lista = [];
//   lista.push(plane1, plane2, plane3, plane4, plane5);
//   f("altceva");
//   console.log(getPlanes2(romania, lista));
//   f("inca ceva");
// }
// f2();
