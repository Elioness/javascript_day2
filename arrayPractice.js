const patients = require("./patients")

// accesing elements in an array
const firstPatient = patients[0];
console.log("firstPatient", firstPatient);

//which element to access can also be dependent on a variable
const whichElementOfArray = 9;
const tenthPatient = patients[whichElementOfArray];
// const tenthPatient = patients[9];
console.log("tenth patient", tenthPatient);

// - console.log the second patient from the array
const secondPatient = patients[1]
console.log("2nd patient", secondPatient)

// - console.log the last patient from the array
const lastPatient = patients.length - 1
console.log(patients[lastPatient])