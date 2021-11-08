//un {substantiv} este {adjectiv}
let p1 = "substantiv";
let p2 = "adjectiv";
const formatString = (s, ...format) => {
  let modified = s;
  for (let i = 0; i < format.length; i++) {
    if (modified.indexOf("{" + p1 + "}") !== -1) {
      modified = modified.replace("{" + p1 + "}", format[0]);
    } else if (modified.indexOf("{" + p2 + "}") !== -1) {
      modified = modified.replace("{" + p2 + "}", format[1]);
    }
  }
  return modified;
};
console.log(
  formatString("un {" + p1 + "} este {" + p2 + "}", "calut", "dragut")
);
