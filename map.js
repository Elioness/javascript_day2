
const patients = require("./patients");

const patientsFullnameOnly = patients.map(patient => {
    const { firstName, lastName } = patient
    const fullname = `${firstName} ${lastName}`
    return fullname
})

//console.log(patientsFullnameOnly)

const anonimisedData = patients.map((anonData) => {
    // const {gender, height, weight, dailyExercise, age} = anonData;
    // return { gender, height, weight, dailyExercise, age };

    return { gender: anonData.gender, height: anonData.height, weight: anonData.weight}
})
console.log(anonimisedData)

