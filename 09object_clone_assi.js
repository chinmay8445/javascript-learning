console.log("******BankSbi Object******");

const bankSbi = {bankName:"SBI", bankAccNo:"2001",bankIfsc:"sbj2020",bankAccType:"Saving"}

console.log(bankSbi);

console.log("\n******BankLocation Object******");

const bankLocation = {street:"Tilak road", city:"Pune",pin:"403201"}

console.log(bankLocation);


console.log("\n******Cloned Objects******");

const Cloned_obj=Object.assign({},bankLocation);

console.log(Cloned_obj);

const merged_obj= Object.assign({},bankSbi,bankLocation);

console.log(merged_obj);




