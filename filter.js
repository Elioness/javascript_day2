// const teachers = [
//   { name: "Rein", age: 32 },
//   { name: "Wouter", age: 25 },
//   { name: "Matias", age: 28 },
// ];

// const teachersUnder30 = teachers.filter(function (teacher) {
//   if (teacher.age < 30) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const teacherUnder30v2 = teachers.filter(teacher => teacher.age < 30)

// console.log(teacherUnder30v2);

//filter method always answers to true or false. Same with map and find. True will be stored
//those indexes that are false would be ignored
const patients = require("./patients");
// hardcoding age 65 for now, we can make this dynamic later
const age = 60;

const patientsOlderThan = patients.filter(function (patient) {
  //console.log("WHAT IS PATIENT?", patient);
  console.log(patient.age > age);
  if (patient.age > age) {
    return true;
  } else {
    return false
    
  }
});

console.log("OUTPUT:", patientsOlderThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS OLDER THAN ${age}:`, patientsOlderThan.length);
