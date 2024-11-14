

function squareOfWordLength(givenString){
    var givenStringLength= givenString.length;
    var result= givenStringLength * givenStringLength;
    return result;
}

var returnvalue = squareOfWordLength("Javascript");
console.log(`Given string is "Javascript" and its lengts square is :${returnvalue}`);

var returnvalue = squareOfWordLength("Google Chrome");
console.log(`Given string is "Google Chrome" and its lengts square is :${returnvalue}`);

var returnvalue = squareOfWordLength("Web developer smart");
console.log(`Given string is "Web developer smart" and its lengts square is :${returnvalue}`);


function strinOperation(givenString){
    var strLength =givenString.length;
    var words = givenString.split(" ");
    var totalWords=words.length;
    var strDivision=strLength/totalWords;
    console.log(`\nThe stringlenth divide by total words = ${strDivision}`);
    
    var strMultiply=strLength*totalWords;
    console.log(`The stringlenth multiply by total words = ${strMultiply}`);

}

strinOperation("I am Angular Developer");


