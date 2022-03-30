//Exercise 1

let x = 1;
let y = 2;

let res1 = String(x)+String(y);
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x)+String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = Number(String(x)+Boolean(y));
console.log(res4); // NaN
console.log(typeof res4); // "number"

//Exercise 2

let enteredFromUserNumber = prompt("Enter random number:","");

if(enteredFromUserNumber % 2 == 0 && enteredFromUserNumber > 0){
    console.log("Your entered number is pair and positive");
}
else if(enteredFromUserNumber % 2 == 0){
    console.log("Your entered number is pair,but not positive");
}
else if(enteredFromUserNumber > 0)
{
    console.log("Your entered number isn´t pair,but positive");
}
else{
    console.log("Your entered number isn´t pair and not positive");
}

if (enteredFromUserNumber % 7 == 0) {
    console.log("Your entered number multiple to 7");
} else {
    console.log("Your entered number not multiple to 7");
}

//Exercise 3

let userAge = prompt("Enter your age:");
let isAdult = userAge;

if (isAdult >= 18) {
    console.log("Ви досягли повнолітнього віку");
} else {
    console.log("Ви ще надто молоді");
}

//Exercise 4

let a = Number(prompt("Enter first triangle side:"));
let b = Number(prompt("Enter second triangle side:"));
let c = Number(prompt("Enter third triangle side:"));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
	alert("Incorrect data!")
}
else if (a + b < c || b + c < a || a + c < b) {
	console.log("Triangle with this sides doesn´t exists!");
}
else{
    let halfPerimetr = (a + b + c) / 2;
    console.log("The area of the triangle: " + Math.sqrt(halfPerimetr * (halfPerimetr - a) * (halfPerimetr - b) * (halfPerimetr - c)).toFixed(3)); 
}

if(a ** 2 + b ** 2 === c ** 2 || b ** 2 + c ** 2 === a ** 2 || a ** 2 + c ** 2 === b ** 2){
    console.log("Triangle has a right angle");
}
else{
    console.log("Triangle has no right angle");
}

//Exercise 5

let currentHour = new Date().getHours();

if(currentHour >= 23 && currentHour <= 5){
    console.log("Доброї ночі");
}
else if(currentHour >= 5 && currentHour <= 11){
    console.log("Доброго ранку");
}
else {
	console.log(currentHour >= 11 && currentHour < 17 ? "Доброго дня" : "Доброго вечора");
}