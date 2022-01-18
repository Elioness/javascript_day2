const patients = require("./patients");

// declare function
function displayFullName(patient) {
  const { firstName, lastName } = patient;
  const fullName = `${firstName} ${lastName}`;
  console.log(fullName);
}

//patients.forEach(displayFullName);

// pass anonymous function directly
patients.forEach(function (patient) {
  const { firstName, age } = patient;
  console.log(`${firstName} - age: ${age}`);
});

// DIY's
// - for each patient log their weight
patients.forEach(function (patient) {
  const { firstName, weight } = patient;
  console.log(`${firstName} - weight: ${weight}`);
});

// - for each patient, log their last name and gender
function displayLastnameGender (patient){
    const { lastName, gender } = patient;
    console.log(`${lastName} - ${gender}`)
}

//patients.forEach(displayLastnameGender)

// - for each patient,
//      - if they are of gender 'm' console.log Mr. and their lastName
//      - if they are of gender 'f' console.log Mrs. and their lastName

function genderDisplay(patient) {
    const {lastName, gender} = patient;
    if (gender === "f"){
        console.log("Mrs " + lastName)
    } else {
        console.log("Mr " + lastName)
    }
}

patients.forEach(genderDisplay)
