const fruits = ["apple", "banana", "mango", "orange"];
fruits.forEach((fruit) => {
  console.log(fruit);
});

const students = [
  { name: "Rohit", age: 18 },
  { name: "Ro", age: 19 },
  { name: "Rohi", age: 25 },
  { name: "Rot", age: 11 },
];

const adultStudents = students.filter((student) => {
  return student.age > 18;
});
const adultStudentName = adultStudents.map((stu) => {
  return stu.name;
});
console.log(adultStudentName);
