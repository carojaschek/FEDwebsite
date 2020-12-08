// JavaScript Document

/* klikken op de Feedback Button - form wordt getoont door class toe te voegen en weer weggehaald (toggle)*/
var feedbackButton = document.querySelector("form button");
feedbackButton.addEventListener("click", formHeenEnWeer);

function formHeenEnWeer(event) {
    event.preventDefault();
    var feedbackButtonWeg = document.querySelector("form button:first-of-type");
    var hetFormulier = document.querySelector("form");
    hetFormulier.classList.toggle("toonForm");
    feedbackButtonWeg.classList.add("verwijderFeedbackButton");
}


/* klikken op het hamburger menu - streepjes worden een kruisje en menu opent */
var hamburgerButton = document.querySelector("header button:first-of-type");
hamburgerButton.addEventListener("click", menuAnimatie);


function menuAnimatie() {
    document.body.classList.toggle("menuOpen");
    var hetMenu = document.querySelector("nav");
    hetMenu.classList.toggle("toonMenu");
}


var emojiAnimatie = document.querySelector("form img");
emojiAnimatie.addEventListener("click", wordtGroter);

function wordtGroter() {
    emojiAnimatie.classList.toggle("groter");
}
