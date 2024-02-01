function changeDrop(id, yes=true, no=true) {
    const el = document.getElementById(id);
  
    if (el !== null){
      if (yes == true) {
        el.style.display = "block";
      } if (no == true) {
        el.style.display = "none";// problem here
      }
    }
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

// if(typeof(Storage)!=="undefined") {
    
// }