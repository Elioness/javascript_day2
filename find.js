const patients = require("./patients")

// const id = parseInt(process.argv[3])

// const specificPatient = patients.find(function(patient) {
//     //console.log("output v1")
//     if (id === patient.id){
//         return true
//     } else {
//         return false
//     }
// })

// const specificPatientv2 = patients.find (function (patient) {
//     //console.log("output v2");
//     return id === patient.id
// })

// const specificPatientv3 = patients.find(patient => id === patient.id)

// //console.log("output v3", specificPatientv3)

const email = process.argv[2];

const patientByEmail = patients.find(patient => email === patient.email)
console.log(patientByEmail)
