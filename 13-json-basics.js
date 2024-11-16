



const studentData =`
{
    "firstName":"Elon",
    "age":45,
    "city":"LA",
    "isMarried":true,
    "skills":["HTML","CSS","JS","ML","AI","DS"],
    "marks":{
        "PHY":90,
        "ENG":60,
        "MATH":99
    },
    "Weight":null
}`;

console.log(`======JSON String to Object conversion======`);
console.log(typeof studentData);
const studentDataInObjectFormat = JSON.parse(studentData);
console.log(typeof studentDataInObjectFormat);
console.log(studentDataInObjectFormat);
console.log(studentDataInObjectFormat.skills);
console.log(studentDataInObjectFormat.city);



console.log(`======Object to JSON String conversion======`);

let studentJenny =
{
    "fullName":"Jenny",
    "email":"jenny@gmail.com",
    "qualifiaction":"BE CSE",
    "isMarried":true,
    "age":55,
    "hobbies":["Travelling","Programming","Reading"],
    "marks":{
        "physics":90,
        "maths":67,
        "programming":89,
        "socialScience":78
    }
}

const studentJennyJson = JSON.stringify(studentJenny);
console.log(studentJennyJson);




