// JavaScript Document

/* klikken met de muis op de Feedback Button*/
var feedbackButton = document.querySelector("form button");


feedbackButton.addEventListener("click", formHeenEnWeer);

function formHeenEnWeer(event) {
    event.preventDefault();
    var feedbackButtonWeg = document.querySelector("form button:first-of-type");
    var hetFormulier = document.querySelector("form");
    hetFormulier.classList.toggle("toonForm");
    feedbackButtonWeg.classList.add("verwijderFeedbackButton");
}


var openMenu = document.querySelector("div");
openMenu.addEventListener("click", menuHeenEnWeer);

function menuHeenEnWeer (){
    var hetMenu = document.querySelector("nav");
    hetMenu.classList.toggle("toonMenu");
}
