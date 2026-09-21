function getTopStudent(students) {
  return students.reduce((highest, student) => {
    return student.score > highest.score ? student : highest;
  });
}

const students = [
  { name: "John", score: 85 },
  { name: "Sarah", score: 95 },
  { name: "Mike", score: 88 }
];

console.log(getTopStudent(students));