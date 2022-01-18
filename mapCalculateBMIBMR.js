const patients = require("./patients");

function calculateBMI(weight, height) {
    return Math.round(weight / (height * height))
}

function calculateBMR(weight, height, ageOfUser, gender){
    const heightInCm = height * 100

    let BMR 

    if (gender === "f"){
        BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser - 150;
    } else {
        BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser + 50;
    }

    return BMR
}

//map BMI 
 const patientsBMI = patients.map((patient) => {
     const {firstName, weight, height} = patient;

     let BMI = calculateBMI(weight, height)
     
     return `This is ${firstName}'s ${BMI}`
 })

 //map BMR

 const patientsBMR = patients.map((patient) => {
    //  const {firstName, weight, height, age, gender} = patient;
     
    //  let BMR = Math.round(calculateBMR(weight, height, age, gender));

    //  return `This is ${firstName}'s  BMR:${BMR}`;

    let BMR = calculateBMR(
        patient.weight,
        patient.height,
        patient.age,
        patient.gender
    )

    return {name: patient.firstName, BMR: BMR }
 })

 // console.log(patientsBMI)
 console.log(patientsBMR)