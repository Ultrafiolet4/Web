//Exercise 1

function propsCount(yourObject) {
    let count = 0;
    for (const i in yourObject) {
        count++;
    }
    return count;
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
    };

    console.log(propsCount(mentor));

//Exercise 2

let veryFatCat=
{
    age:5,
    color:"grey",
    pawsQuantity:4,
    weight:8,
    name:"cat"
};

function showProps(yourObject) {
    let arrayOfProperties=[];
    let arrayOfPropertiesValues=[];

    for (let i in yourObject) {
        arrayOfProperties.push(i);
        arrayOfPropertiesValues.push(veryFatCat[i]);
    }

    console.log(arrayOfProperties,"\n",arrayOfPropertiesValues);
}

showProps(veryFatCat);

//Exercise 3

class Person
{

    constructor(name,surname){
        this.name=name;
        this.surname=surname;
    }

    showFullName()
    {
        console.log(this.name," ",this.surname);
    }
}

class Student extends Person
{

    constructor(name,surname,year)
    {
        super(name,surname);
        this.year=year;
    }

    showFullName(middleName)
    {
        console.log(this.name," ",this.surname," ",middleName);
    }

    showCourse()
    {
        let currentYearOfGraduation= new Date().getFullYear();

        return (currentYearOfGraduation-this.year>6) ?  "You already get graduation!!!" : currentYearOfGraduation-this.year ;
    }
}

const studentFirst = new Student("Petro", "Petrenko", 2016);
studentFirst.showFullName("Petrovych");
console.log("Current course: " + studentFirst.showCourse());

//Exercise 4

class Worker 
{
    #experience=1.2;

    constructor(fullName,dayRate,workingDays)
    {
        this.fullName=fullName;
        this.dayRate=dayRate;
        this.workingDays=workingDays;
    }

    showSalary()
    {
        return this.dayRate * this.workingDays;
    }

    showSalaryWithExperience()
    {
        return this.dayRate * this.workingDays * this.#experience;
    }

    get getExperience()
    {
        return this.#experience;
    }

    set setExperience(newValueOfExperience)
    {
        this.#experience=newValueOfExperience;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.getExperience);
worker1.showSalaryWithExperience();
worker1.setExperience = 1.5;
console.log("New experience: " + worker1.getExperience);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Dana White", 43, 21);

function outputingWorkersBySortedSalary(listOfWorkers){
    listOfWorkers.sort((first,second) => first.showSalaryWithExperience() - second.showSalaryWithExperience()).forEach(worker => console.log(worker.fullName + " and his salary:" + worker.showSalaryWithExperience()));
}

outputingWorkersBySortedSalary([worker1,worker2,worker3]);

//Exercise 5


class GeometricFigure
{
    getArea()
    {
        return 0;
    }

    toString()
    {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Circle extends GeometricFigure 
{
    constructor(radiusOfCircle) 
    {
        super();
        this.radiusOfCircle = radiusOfCircle;
    }

    getArea() 
    {
        return (Math.PI * (this.radiusOfCircle ** 2));
    }
}

class Triangle extends GeometricFigure {
    constructor(sideA, sideB, sideC) 
    {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    getArea() 
    {
        let halfOfPerimetr = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(halfOfPerimetr * (halfOfPerimetr - this.sideA) * (halfOfPerimetr - this.sideB) * (halfOfPerimetr - this.sideC));
    }
}

class Square extends GeometricFigure 
{
    constructor(side) 
    {
        super();
        this.side = side;
    }
    getArea() 
    {
        return this.side ** 2;
    }
}

function handleFigures(figures)
{
    let sumOfAllAreas=0;
    figures.filter(i => i instanceof GeometricFigure).forEach(i => {
        console.log("Geometric figure: ",i.toString(),"-area:",i.getArea(),"\n");
        sumOfAllAreas+=i.getArea();
    });

    console.log("Total area:",sumOfAllAreas);
}

handleFigures([new Triangle(4, 5, 6), new Square(7), new Circle(5),new Student("Petro", "Petrenko", 2016)]);