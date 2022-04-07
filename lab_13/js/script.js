//Exercise 1

let arrayOfRandomTypes = [];

arrayOfRandomTypes[0]=154;
arrayOfRandomTypes[1]="Java";
arrayOfRandomTypes[2]=true;
arrayOfRandomTypes[3]=null;

console.log(arrayOfRandomTypes.length);

arrayOfRandomTypes[4]=prompt("Enter your atribute");
console.log(arrayOfRandomTypes[4]);

arrayOfRandomTypes.shift();
console.log(arrayOfRandomTypes);
console.log("---------------");

//Exercise 2

let cities=["Ternopil", "Lviv", "Warsaw"];
console.log(cities.join("*"));
console.log("---------------");

//Exercise 3

let arrayOfNumbers=[2,3,4,5];

let multiplyAllElementsOfArray = 1;

for(let i=0;i<arrayOfNumbers.length;i++)
{
    multiplyAllElementsOfArray*=arrayOfNumbers[i];
}
console.log(multiplyAllElementsOfArray);

multiplyAllElementsOfArray=1;
let i = 0;

while(i<arrayOfNumbers.length)
{
    multiplyAllElementsOfArray*=arrayOfNumbers[i];
    i++;
}
console.log(multiplyAllElementsOfArray);
console.log("---------------");

//Exercise 4

for(let i=0;i<=15;i++)
{
    if(i%2==0)
    console.log(i + " is even");
    else
    console.log(i + " is odd");
}
console.log("---------------");

//Exercise 5

function randArray(k)
{
    let arrayOfRandomNumbers=[];

    for(let i=0;i<k;i++)
    {
        arrayOfRandomNumbers[i]=Math.floor(Math.random() * 500) + 1;;
    }

    console.log(arrayOfRandomNumbers);
    arrayOfRandomNumbers.length = 0;
}

randArray(5);
randArray(10);

console.log("---------------");

//Exercise 6

let randomEnteredNumber = prompt("Enter your number");
let numberDegree = prompt("Enter degree of your number");
let regexPattern = /^-?[0-9]+$/;
let firstResult = regexPattern.test(randomEnteredNumber);
let secondResult = regexPattern.test(numberDegree);
if(firstResult && secondResult)
    alert("Your entered numbers that correct for program!");
else
{
    alert("You entered not integers! Program FINISHED!!!");
    throw '';
}

function raiseToDegree(randomEnteredNumber,numberDegree)
{
    return Math.pow(randomEnteredNumber,numberDegree);
}

console.log(raiseToDegree(randomEnteredNumber,numberDegree));
console.log("---------------");

//Exercise 7

function findMin()
{
    let minimum=arguments[0];

    for(let i=0;i<arguments.length;i++)
    {
        if(arguments[i]<minimum)
        minimum=arguments[i];
    }

    return minimum;
}

console.log(findMin(2,4,67,1,-3,-94,11));
console.log("---------------");

//Exercise 8

    function findUnique()
    {
    for(let i=0;i<arguments.length;i++)
        for(let j=i+1;j<arguments.length;j++)
        {
            if(arguments[i]===arguments[j])
            {
                 return false;
            }
        }
        return true;
    }

    console.log(findUnique(0,4,7,1,5,6));
    console.log(findUnique(3,9,1,8,6,3));
    console.log("---------------");

//Exercise 9

function returnLastElement(randomArray,numberToReturnFromArray)
{
    let returnArray=[];

    if(numberToReturnFromArray===undefined)
    return randomArray[randomArray.length-1];
    else{
        for(let i = randomArray.length-numberToReturnFromArray;i<randomArray.length;i++)
        returnArray.push(randomArray[i]);

        return returnArray;
    }
}

let randomArray =[1,8,4,6,3,56,2457,9756];
console.log(returnLastElement(randomArray));
console.log(returnLastElement(randomArray,2));
console.log("---------------");

//Exercise 10

function allFirstLettersToUpperCase(randomString)
{
    let arrayOfWords=randomString.split(" ");
    for(let i=0;i<arrayOfWords.length;i++)
    {
        arrayOfWords[i]=arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].substring(1).toLowerCase();
    }
    return arrayOfWords.join(" ");
}

console.log(allFirstLettersToUpperCase("lorem ipsum"));