function playAudio() {
  var audio = new Audio("../audio/notes.mp3");
  audio.play();
}

function changeDrop(id, yes=true, no=true) {
    const el = document.getElementById(id);
  
    if (el !== null){
      if (yes == true) {
        el.style.display = "block";
      } if (no == true) {
        el.style.display = "none";
      }
    }
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