/*jshint esversion: 6 */

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
/*var sluitFeedback = document.querySelector("form button:last-of-type");
sluitFeedback.addEventListener("click", )*/


/* klikken op het hamburger menu - streepjes worden een kruisje en menu opent */
var hamburgerButton = document.querySelector("header button:first-of-type");
hamburgerButton.addEventListener("click", menuAnimatie);


function menuAnimatie() {
    document.body.classList.toggle("menuOpen");
    var hetMenu = document.querySelector("nav");
    hetMenu.classList.toggle("toonMenu");
}

/* klikken op de emojis in de feedback form */
var emojiAnimatie = document.querySelectorAll("form img");

emojiAnimatie.forEach(emoji => {
    emoji.addEventListener("click", (event) => {
        emoji.classList.toggle("groter");
        event.target.style.border = '2px solid black'
        event.target.style.borderRadius = '50%';
    })
});

/*Submenu openen*/
var submenuOpenen = document.querySelector("nav > ul > li:nth-of-type(2)");
var openNestedList = document.querySelector("nav ul ul");
submenuOpenen.addEventListener("click", submenuVisible);

function submenuVisible() {
    openNestedList.classList.toggle("submenu");
    submenuOpenen.classList.toggle("turnArrow");
}

/*Animated Counter Numbers*/
/*select all elements with class of counter to get a nodelist*/
var counters = document.querySelectorAll(".counter");
/*the lower this number the faster the count*/
var speed = 300;
/*select all elements from the nodelist*/
counters.forEach(counter => {
    var updateCount = () => {
        /*getting the number written in data-target (in html) which is different for every div, without the plus we would get strings - the plus makes from the strings numbers*/
        var target = +counter.getAttribute("data-target");
        var count = +counter.innerText;
        /*define the increment by dividing the value from target through the speed which is set above - so we have every single step of counting up from 0 to the target value*/
        var inc = target / speed;
        if (count < target) {
            /*keep on adding the increment every 1 millisecond until the target is reached, with math.ceil we round up so no decimals*/
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            /*make the count stop if it reaches the target*/
            count.innerText = target;
        }
    }
     updateCount();
})

