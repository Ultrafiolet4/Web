//Exercise 1

function checkIfFirstLetterIsUpperCase(enteredText)
{
    let regExp= /^[A-Z]/;
    console.log(regExp.test(enteredText));
}

checkIfFirstLetterIsUpperCase("HTML is useful");
checkIfFirstLetterIsUpperCase("java is great");


//Exercise 2

function splitAndReverseEnteredString(enteredString)
{
    let listOfSplitedString=enteredString.split(/\s/).reverse();
    
    console.log(listOfSplitedString.join(","));
}

splitAndReverseEnteredString("Common text");

//Exercise 3

function checkValidationOfBankCardNumber(cardNumber)
{
   let regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
   console.log(regExp.test(cardNumber));
}

checkValidationOfBankCardNumber("6527-0942-6532-6543");
checkValidationOfBankCardNumber("23-0956742-6532-6543");

//Exercise 4

function checkValidationOfEmail(enteredEmail)
{
    let regExp=/^\w+-?\w*@\w+\.\w+$/;
    
    console.log(regExp.test(enteredEmail));
}

checkValidationOfEmail("my_mail@gmail.com");
checkValidationOfEmail("#my_mail@gmail.com");
checkValidationOfEmail("my_ma--i$#l@gmail.com");

//Exercise 5

function checkValidationOfLogin(enteredLogin)
{
    let resultFromValidation=/^[\D_.]+[\w.]{2,10}$/;
    console.log(resultFromValidation.test(enteredLogin)+"\n"+enteredLogin.match(/\d*\.?\d*/g).filter(i => i.length > 0).join(","));
}

checkValidationOfLogin("ee1.1ret3");
checkValidationOfLogin("ee1*1ret3");
