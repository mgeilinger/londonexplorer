function playNotes() {
  var audio = new Audio("../audio/notes.mp3");
  audio.play();
}

function playWalking() {
  var audio = new Audio("../audio/walking.mp3");
  audio.play();
}

function delay (URL) {
  setTimeout( function() { window.location = URL }, 2000 );
}

function notesUp() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("notes").style.display = "block";
  document.getElementById("map").style.display = "none";
}

function mapUp() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("map").style.display = "block";
  document.getElementById("notes").style.display = "none";
}

function notesDown() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("notes").style.display = "none";
  document.getElementById("map").style.display = "none";
}

function clearData() {
    localStorage.clear();
}

console.log(localStorage);

var arrived = localStorage.getItem("firstTime");
var intro = document.getElementById("intro");

if(!arrived){
  localStorage.setItem("firstTime","true");

  intro.style.display = "block"
}
else {
  intro.style.display = "none"
}

function eatStore() {
    var eat = document.getElementById("foodEaten");
    
    if (eat !== null) {
        eat.style.display = "block"
    }
    
    localStorage.setItem('foodEaten','show');
}

if(localStorage.getItem('foodEaten') === 'show') {
    eatStore();
}