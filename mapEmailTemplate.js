const patients = require("./patients");

//I want to create an email template
//has a ternary funtion that determines gender

const templates = patients.map((patient) => {
    const {lastName, gender} = patient;
    const prefix = gender === "f" 
    ? "Mrs" : "Mr"

    return `
    <html>
        <head>
            <title>Thanks for your participation</title>
        </head>
        <body>
            <h1>You are awesome</h1>

            <p>

                Dear ${prefix} ${lastName},

                Thank you for participating in this study ...

            </p>
        </body>
    </html>
  `;
});

console.log(templates[0]);
console.log(templates[1]);
console.log(templates)
