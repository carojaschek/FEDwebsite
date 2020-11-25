// JavaScript Document

/* klikken met de muis op deButton*/
var feedbackButton = document.querySelector("form h2");

function formHeenEnWeer(){
    let hetFormulier = document.querySelector("form");
    hetFormulier.classList.toggle("toonForm");
}

feedbackButton.addEventListener("click", formHeenEnWeer);
