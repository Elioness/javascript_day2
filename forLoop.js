const patients = require("./patients");

for (let i = 0; i < patients.length; i++){
    console.log(patients[i].firstName + " " + patients[i].lastName);
}