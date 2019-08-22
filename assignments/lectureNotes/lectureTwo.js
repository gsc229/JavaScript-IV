class Parent {
  constructor(attributes) {
    this.newName = attributes.name;
    this.newLocatoin = attributes.location;
    this.newJob = attributes.job;
  } // write methods here
  work() {
    return `${this.newName} is a ${this.newJob}`;
  }
} // this closes the parent

class Child extends Parent {
  constructor(childAttributes) {
    super(childAttributes); //super replaces parent.call
    this.major = childAttributes.major;
  }
  study() {
    return `${this.newName} is studying ${this.newMajor}`;
  }
}

class GrandChild extends Child {
  constructor(grandChildAtts) {
    super(grandChildAtts);
    this.gender = grandChildAtts.gender;
    this.name = grandChildAtts.name;
  }
  speaks() {
    return `${this.name} can say: 'Mama, dada'`;
  }
}

const gChild = new GrandChild({
  gender: "male",
  name: "Tommy"
});

console.log(gChild.speaks());

const mom = new Parent({
  name: "mom",
  location: "USA",
  job: "engineer"
});

const daughter = new Child({
  name: "mom",
  location: "USA",
  major: "Computer Science"
});

console.log(mom.work());
