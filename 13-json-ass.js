


const employeData = `
{
 "name":"Alex melon",
 "id":"E00245",
 "role":["Dev","DBA"],
 "age":23,
 "doj":"11-12-2019",
 "married":"false",
 "address":{"street":"32,Laham St.",
            "city":"Innsbruck",
            "country":"Austria"},
 "referred-by":"E0012"
 }`;

 const employeeInfo = JSON.parse(employeData);
console.log(employeeInfo);
console.log("\n*****Role*****");
console.log(employeeInfo.role[0]);
console.log("\n*****Last Name*****");
console.log(employeeInfo.name.split(" ")[1]);
console.log("\n*****Joining Year*****");
console.log(employeeInfo.doj.split("-")[2]);



//console.log(employeeInfo.);
