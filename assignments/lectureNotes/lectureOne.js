// classes are not hoisted
// classes use strict (means prevents window binding)
// methods have a special syntax
// constructor is visible...we see the word 'constructor'

class Charachter {
  constructor(atts) {
    this.location = atts.location;
    this.name = atts.name;
    this.phrse = atts.phrase;
  }
  speak() {
    console.log(`${this.phrse}`);
  }
}

const joey = new Charachter({
  location: "New York",
  name: "Joey",
  phrase: "How you doin?"
});

const bugs = new Charachter({
  location: "Toon Land",
  name: "Bugs Bunny",
  phrase: "What's up dock?"
});

console.log(joey);
