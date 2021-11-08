//implementați următoarea structură de tipuri.
//Software este un tip care are metoda 'run'.
//Browser moștenește Software și poate adăuga și instala Plugin.
//Un Browser poate avea multiple Plugin.

class Software {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} is running!`);
  }
}
class Plugin {
  constructor(name) {
    this.name = name;
  }
  installing() {
    console.log(`${this.name} is installing...`);
  }
}

class Browser extends Software {
  constructor(name) {
    super(name);
    this.plugins = [];
  }
  addPlugin(p) {
    this.plugins.push(p);
  }
  install() {
    this.run();
    console.log(`${this.name} is installing plugins...`);
    for (const p of this.plugins) {
      p.installing();
    }
    console.log("Done.");
  }
}
let b1 = new Browser("Mozilla");
let p1 = new Plugin("No Ads");
let p2 = new Plugin("Netflix");
let p3 = new Plugin("Translate");
b1.addPlugin(p1);
b1.addPlugin(p2);
b1.addPlugin(p3);
b1.install();
