function playNotes() {
  var audio = new Audio("../audio/notes.mp3");
  audio.play();
}

function playWalking() {
  var audio = new Audio("../audio/walking.mp3");
  audio.play();
}

function playMale1() {
  var audio = new Audio("../audio/male_1.mp3");
  audio.play();
}

function playMale2() {
  var audio = new Audio("../audio/male_2.mp3");
  audio.play();
}

function playMale3() {
  var audio = new Audio("../audio/male_3.mp3");
  audio.play();
}

function playFemale1() {
  var audio = new Audio("../audio/female_1.mp3");
  audio.play();
}

function playFemale2() {
  var audio = new Audio("../audio/female_2.mp3");
  audio.play();
}

function playFemale4() {
  var audio = new Audio("../audio/female_4.mp3");
  audio.play();
}

function delay (URL) {
  setTimeout( function() { window.location = URL }, 1500 );
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

function next() {
  document.getElementById("partOne").style.display = "none";
  document.getElementById("partTwo").style.display = "block";
}

function clearData() {
  localStorage.clear();
}

function showConvo() {
  document.getElementById("convo").style.display = "block";
}

// Code to check whether the answer was correct, and then display the corresponding paragraph.

function displayResult() {
  var killer = document.getElementById("Killer").value;
  var motive = document.getElementById("Motive").value;
  
  localStorage.setItem("killer", killer.value);
  localStorage.setItem("motive", motive.value);

  if (killer==="Cosgrove" && motive==="insurance") {
    document.getElementById("correct").style.display = "block";
    document.getElementById("wrong").style.display = "none";
  } else {
    document.getElementById("correct").style.display = "none";
    document.getElementById("wrong").style.display = "block";
  }
}

console.log(localStorage);