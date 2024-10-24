
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
    console.log("Three numbers are :",a,b,c);
    var result=a+b+c;
    console.log("Addition of three numbers is = ",result);
 }

 addThreeValues(10.23,600,40);

 console.log("***************************");

 function addThreeValues(a,b,c){
    console.log("Three parameters are :",a,b,c);
    var result=a+b+c;
    console.log("Addition of three parameters is =",result);
 }

 addThreeValues("Hello","Good","Morning");


