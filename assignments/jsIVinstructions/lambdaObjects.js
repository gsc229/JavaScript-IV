const greg = new Student({
  name: "Greg",
  age: 35,
  location: "Toldeo, OH",
  previousBackground: "Business Teacher",
  className: "Web23",
  favSubjects: ["HTML", "CSS", "JavaScript", "REACT.js"],
  grade: 75
});

const bob = new Student({
  name: "Bob",
  age: 45,
  location: "Chicago, IL",
  previousBackground: "investor",
  className: "CS20",
  favSubjects: ["HTML", "CSS", "JavaScript", "REACT.js", "Typescript"]
});

const joe = new Instructor({
  name: "Joe",
  age: 45,
  location: "Chicago, IL",
  specialty: "React.js",
  favLanguage: "JavaScript",
  cathPhrase: "get crackin'"
});

const cathy = new ProjectManager({
  name: "Cathy",
  age: 35,
  location: "Salt Lake, UT",
  specialty: "Node.js",
  favLanguage: "JavaScript",
  cathPhrase: "it wasn't me",
  gradClassName: "CS2",
  favInstructor: "Joe"
});

console.log(cathy.calcGrade(greg));
// console.log(cathy.debugsCode(greg, "react.js"));

// console.log(joe.demo("inheritance"));
// console.log(joe.grade(greg, "inheritance"));
