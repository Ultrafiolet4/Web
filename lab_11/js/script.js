//Exercise 2
console.log("Бица");

//Exercise 3
let firstNumber = 24;
let secondNumber =13;

console.log("First number equals "+firstNumber+" and second number is "+secondNumber);

firstNumber=secondNumber;

console.log("First number equals "+firstNumber+" and second number is "+secondNumber);

//Exercise 4
let myObject =
{
    stringType:"It´s string",
    numberType:24,
    booleanType:true,
    undefinedType:undefined,
    nullType:null
}

//Exercise 5
let isAdult=confirm("Ви досягнули повноліття?");
console.log(isAdult);

//Exercise 6
let myName="Роман";
let mySurname="Бица"
let myGroup="КН-321";
let myBirthYear=2004;
let isMarried=false;

console.log(myBirthYear);
console.log(isMarried);
console.log(myName);
console.log(mySurname);
console.log(myGroup);

let myUndefined;
let myNull = null;
                                
console.log(typeof myUndefined);
console.log(typeof myNull);

//Exercise 7
let userLogin=prompt("Enter login");
let userEmail=prompt("Enter email");
let userPassword=prompt("Enter password");

alert("Dear " + userLogin + " your email is " + userEmail + " and your password is " + userPassword);

//Exercise 8
let numberOfSecondsInAnHour= 60 * 60;
let numberOfSecondsInADay= 24 * numberOfSecondsInAnHour;
let numberOfSecondsInAMonth= 30 * numberOfSecondsInADay;

alert("Quantity of seconds in an hour: " + numberOfSecondsInAnHour + ", Quantity of seconds in a day: " + numberOfSecondsInADay + ", Quantity of seconds in a month: " + numberOfSecondsInAMonth);