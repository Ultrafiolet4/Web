//Exercise 1

function setContextOfDivElementVariantOne()
{
    document.getElementById("test").textContent="Last";
}

function setContextOfDivElementVariantTwo()
{
    document.querySelector("#test").textContent="Last";
}


//Exercise 2

function changeDogImageToCatImage()
{
    let currentImage = document.getElementsByClassName('image')[0];
    if(currentImage.getAttribute('alt')==="Dog")
    {
        currentImage.setAttribute('alt',"Cat");
        currentImage.setAttribute('src',"img/cat.jpg");
    }
    else
    {
        currentImage.setAttribute('alt',"Dog");
        currentImage.setAttribute('src',"img/dog.jpg");
    }
}

function openModalWindowWithCatOrDogImage() {
    let modalImage = document.getElementsByClassName('Image')[0];
    let animalImage = document.getElementsByClassName('image')[0];

    modalImage.setAttribute('src', animalImage.getAttribute('src'));
    modalImage.setAttribute('alt', animalImage.getAttribute('alt'));

    let modalWindow = document.getElementById('modalWindowWithImage');
    modalWindow.style.display = 'block';
}

function closeModalWindowWithCatOrDogImage() {
    let modalWindow = document.getElementById('modalWindowWithImage');
    modalWindow.style.display = 'none';
}

//Exercise 3

function getAllBlockDivElements()
{
    let text = document.querySelectorAll('#text > p');
    for (let i = 0; i < text.length; i++) {
        console.log("Selector text " + i + ": " + text[i].textContent);
    }
}

//Exercise 4

function openModalWithLists()
{
    let itemsInListFirst =document.querySelectorAll("ul>li");
    let itemsInListSecond =document.getElementsByTagName("li");

    let modalWindow=document.getElementById("modalWindowEx4");

    document.getElementById('firstOrderedList').textContent = itemsInListFirst[0].innerHTML + ',' + itemsInListFirst[4].innerHTML + ',' + itemsInListFirst[1].innerHTML + ',' + itemsInListFirst[3].innerHTML + ',' + itemsInListFirst[2].innerHTML;
    document.getElementById('secondOrderedList').textContent = itemsInListSecond[0].innerHTML + ',' + itemsInListSecond[4].innerHTML + ',' + itemsInListSecond[1].innerHTML + ',' + itemsInListSecond[3].innerHTML + ',' + itemsInListSecond[2].innerHTML;

    modalWindow.style.display='block';
}

function closeModalWithLists() {
    let modalWindow = document.getElementById('modalWindowEx4');
    modalWindow.style.display = 'none';
}

//Exercise 5

function getStyleForAllExerciseFiveElements()
{
    let header = document.getElementsByClassName('header');
    let elementsInDiv = document.querySelectorAll('#myDiv > p');
    let elementsInList = document.getElementById('myList');
    let mySpan = document.getElementsByClassName('mySpan')[0];

    elementsInDiv[0].style.fontWeight = 'bold';
    elementsInDiv[1].style.color = 'red';
    elementsInDiv[2].style.textDecoration = 'underline';
    elementsInDiv[3].style.fontStyle = 'italic';

    elementsInList.querySelectorAll('li').forEach(i=> i.style.display = 'inline-block');

    mySpan.style.display = 'none';
}

//Exercise 6

function gettingTextFromInput(){
    let firstMessage=prompt("Enter your first message");
    let secondMessage=prompt("Enter your second message");

    let firstInputLine=document.getElementById("input1");
    let secondInputLine=document.getElementById("input2");

    firstInputLine.value=firstMessage;
    secondInputLine.value=secondMessage;

}

function swapTextsInMessages(){
    let firstInputLine=document.getElementById("input1");
    let secondInputLine=document.getElementById("input2");
    
    let firstMessage=firstInputLine.value;
    let secondMessage=secondInputLine.value;
    
    firstInputLine.value=secondMessage;
    secondInputLine.value=firstMessage;
}

//Exercise 7

function creatingContentWithRandomHTMLCode(){
    let htmlCode = document.getElementById('randomHTMLCode');
    htmlCode.innerHTML = '<main class="mainClass check item">' +
    '<div id="myDiv">' +
    '<p>First paragraph</p>' +
    '</div>' +
    '</main>';
}