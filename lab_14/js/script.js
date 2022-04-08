//Exercise 1

function calcRectangleArea(width, height) {
    try {
        if (typeof width !== 'number' || typeof height !== 'number') {
            throw new Error("Incorrect data type!!!");
        }
        return width * height;
    }
    catch (err) {
        return err.message;
    }
}

console.log(calcRectangleArea(5, "five"));

//Exercise 2

function checkAge() {
    let ageOfUser = prompt("Enter your age");

    if (ageOfUser === "")
        throw new Error("The field is empty! Please enter your age");
    else if (isNaN(ageOfUser))
        throw new Error("Incorrect data type!");
    else if (ageOfUser < 14)
        throw new Error("You should be 14 and greater!");

    console.log("Enjoy watching)");
}

try {
    checkAge();
}
catch (err) {
    console.log(err.message);
}

//Exercise 3

function showUser(id)
{
    if(id<0)
    {
        throw new Error(":ID must not be negative:");
    }
    return {id:id};
}

function showUsers(ids)
{
    let arrayOfUsersIds=[];

    for(const id of ids)
    {
        try 
        {
            showUser(id);
            arrayOfUsersIds.push(id);
        }
        catch(err)
        {
            console.log(err.name,err.message,id);
        }
    }
    return arrayOfUsersIds;
}

console.log(showUsers([67, 43, 8, 0, 1]));
console.log(showUsers([7, -12, 44, 22]));

//Exercise 4

class MonthException
{
    constructor(message)
    {
        this.message=message;
        this.name="MonthException";
    }
}

function showMonthName(month) {

	switch (month) {
		case 1:
			return 'January';
		case 2:
			return 'February';
		case 3:
			return 'March';
		case 4:
			return 'April';
		case 5:
			return 'May';
		case 6:
			return 'June';
		case 7:
			return 'July';
		case 8:
			return 'August';
		case 9:
			return 'September';
		case 10:
			return 'October';
		case 11:
			return 'Nowember';
		case 12:
			return 'December';
		default:
			throw new MonthException(':Incorrect number of month!');
	}

}

try {
    console.log(showMonthName(4));
    console.log(showMonthName(20));
} catch (err) {
    console.log(err.name,err.message);
}