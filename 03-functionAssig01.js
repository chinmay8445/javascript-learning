
// functions without argument
function summary(){
    console.log("Hello");
    console.log("My  name is Chinmay Jawale");
    console.log("I have completed my B.tech in Computer Science Engineering");
}
summary();


console.log("***************************");


 // functions with argument

 function personalDetails(firstName,lastName,collegeName)
 {
    console.log("First Name : ",firstName);
    console.log("Last Name : ",lastName);
    console.log("College Name :",collegeName);
    
 }

 personalDetails("Chinmay","Jawale","ADCET");

 console.log("***************************");


 // Function with arguments
 function addThreeValues(a,b,c){
    console.log("Three parameters are :",a,b,c);
    var result=a+b+c;
    console.log("Addition of three parameters is =",result);
 }

 addThreeValues(10.23,600,40);
 console.log("***************************");
 addThreeValues("Hello","Good","Morning");


 console.log("***************************");
 console.log("\n***************************");

 // String Related assignments

 function stringBasics(){
   var company="Google";
   console.log(`\nMy dream company is ${company}`);

   var hobbyone="PlayingCricket";
   var hobbytwo="Travelling";
   var hobbythree="Swimming";

   console.log(`\nMy hobbies are : ${hobbyone}, ${hobbytwo},${hobbythree}`);

   var result=hobbyone.length + hobbytwo.length + hobbythree.length;
   console.log(`\nThe total number of characters are ${result}`);
   console.log("\nThe concatinated are strings are :",hobbyone.concat(hobbytwo,hobbythree));
  
 } 
stringBasics();

console.log("\n***************************");

var givenString="    Hey you are doing good, keep it up    ";
console.log(`\nGiven string is : ${givenString}`);

// length of given string 
console.log("\nString length   :", "The length of string is ",givenString.length);

// Removing extra space 
var trim=givenString.trim();
console.log("\nRemoving extra space :",trim);

//extra spaces count
var totalSpaceCount=trim.split(" ").length-1;
console.log("\nTotal Space count : The total number of spaces are",totalSpaceCount);

//first and last character 
var firstCharacter=trim.charAt(0);
var lastCharacter=trim.charAt(trim.length-1);
console.log("\nThe first and last Charcter of string are : ",firstCharacter,lastCharacter);



//count of total words available in the string
var countWord=trim.split(" ");
console.log("\nTotal words count: The total number of words are ",countWord.length);


//index of word good from the given string
var index=trim.search("good");
console.log("\nThe index of word 'good' is :",index);


//print substring starting from index 22,using substring()

var substring=trim.substr(22)
console.log("\nThe Sub-String strating from index 22 is :",substring);

//Check, is string ends with word "up" after step 3
var end=trim.endsWith("up");
console.log("\nIs give string ends with the word 'up' :",end);



//check is string starts with word "hey" after trimming 

var start=trim.startsWith("Hey");
console.log("\nIs give string starts with the word 'Hey' :",start);








