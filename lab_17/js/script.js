//Exercise 1

function openNewWindow()
{
    let myWindow = window.open("", "", "width=300, height=300");
    window.setTimeout(function(){myWindow.resizeTo(500,500)}, 2000);
    window.setTimeout(function(){myWindow.moveTo(200, 200)}, 4000);
    window.setTimeout(function(){myWindow.close()}, 6000);
}

//Exercise 2

function changeCSS()
{
    let textForStyleChanging = document.getElementById("text");
    textForStyleChanging.style.color="orange";
    textForStyleChanging.style.fontSize=20;
    textForStyleChanging.style.fontFamily="Comic Sans MS";
}

//Exercise 3

function changeColorOfPageByOneClick()
{
    document.body.style.backgroundColor="blue";
}

function changeColorOfPageByDoubleClick()
{
    document.body.style.backgroundColor="pink";
}

function changeColorOfPageByClickAndHold()
{
    document.body.style.backgroundColor="brown";
}

function resetingColor()
{
    document.body.style.backgroundColor="white";
}

function changeColorOfPageByHoverLink()
{
    document.body.style.backgroundColor="yellow";
}

//Exercise 4

function deletePointsFromSelect() {
    let listOfNames=document.getElementsByClassName("points")[0];
	let currentIndex = listOfNames.selectedIndex;
	listOfNames.remove(currentIndex);
}

//Exercise 5

let liveButton = document.getElementsByClassName("liveButton")[0];
let buttonFieldForInformation=document.getElementsByClassName("buttonInformation")[0];

liveButton.addEventListener("click", function(){buttonFieldForInformation.innerHTML += "Live button clicked!<br>";});
liveButton.addEventListener("mouseover", function(){buttonFieldForInformation.innerHTML += "Live button hovered!<br>";});
liveButton.addEventListener("mouseout", function(){buttonFieldForInformation.innerHTML += "Live button not hovered!<br>";});

function resetButtonInformation()
{
    document.getElementsByClassName("buttonInformation")[0].innerHTML = "";
}

//Exercise 6

window.onresize = displayWindowSize;
window.onload = displayWindowSize;

    function displayWindowSize() {
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
        document.getElementsByClassName("width")[0].innerHTML = "Screen width:"+myWidth; 
        document.getElementsByClassName("height")[0].innerHTML = "Screen height:"+myHeight;
    }; 

//Exercise 7

let countryPoints = document.getElementById("country");
let cityPoints = document.getElementById("cities");

setCitiesOptionBySelectedPoint();

countryPoints.addEventListener("change", setCitiesOptionBySelectedPoint);

function setTextValue() {
	let textLabel = document.getElementsByClassName("countryCity")[0];
	textLabel.textContent = countryPoints.options[countryPoints.selectedIndex].text + "," + cityPoints.value;
}

function setCitiesOptionsToSelect(arrayOfCities)
{
    cityPoints.innerHTML = "";
	arrayOfCities.forEach(i => 
    {
		let city = document.createElement("option");
		city.innerHTML = i;
		cityPoints.appendChild(city);
    });

	cityPoints.addEventListener("change", setTextValue);
	setTextValue();
}

function setCitiesOptionBySelectedPoint() {
    if(countryPoints.value==="ukr")
    {
        setCitiesOptionsToSelect(["Kyiv", "Ternopil", "Symu","Lanivtsi"]);
    }
    else if(countryPoints.value==="ger")
    {
        setCitiesOptionsToSelect(["Hamburg", "Brandenburg", "Bavaria", "Berlin"]);
    }
    else if(countryPoints.value==="usa")
    {
        setCitiesOptionsToSelect(["Los Angeles", "Phoenix", "Oklahoma", "Houston"]);
    }
    else 
    {
        setCitiesOptionsToSelect([]);
    }
}




