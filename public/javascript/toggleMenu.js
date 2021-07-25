// Author: Marvelous Jibogu

"use strict";

/* This function controls the display of the nav bar. If the user clicks on the menu tab, the event listener will call the configureToggleMenu
function, which will check if the menu elements (nav bar contents) are displayed, hiding them if they are, and displaying them if they are not.
Event listeners are also added for all the individual nav contents, and if they are clicked on, the event listener calls the relevant function,
returning the href and allowing the user to visit that page*/

function configureToggleMenu() {
  let status = document.getElementById("menu");
  if (status.style.display === "none") {
    status.style.display = "block";
  } else {
    status.style.display = "none";
  }
}

function homeNavigate() {
  location.href = "index.html"
}

function aboutNavigate() {
  location.href = "about.html";
}

function dayInLifeNavigate() {
  location.href = "dayInLife.html";
}

function quizNavigate() {
  location.href = "quiz.html";
}

function contactNavigate() {
  location.href = "contact.html";
}

function accessibilityNavigate() {
  location.href = "accessibility.html";
}

let menuButton = document.getElementById('menuToggle');
menuButton.addEventListener('click',configureToggleMenu,false);

let homeButton = document.getElementById('home');
homeButton.addEventListener('click',homeNavigate,false);

let aboutButton = document.getElementById('about');
aboutButton.addEventListener('click',aboutNavigate,false);

let dayInLifeButton = document.getElementById('dayInLife');
dayInLifeButton.addEventListener('click',dayInLifeNavigate,false);

let quizButton = document.getElementById('quiz');
quizButton.addEventListener('click',quizNavigate,false);

let contactButton = document.getElementById('contact');
contactButton.addEventListener('click',contactNavigate,false);

let accessibilityButton = document.getElementById('accessibility');
accessibilityButton.addEventListener('click',accessibilityNavigate,false);