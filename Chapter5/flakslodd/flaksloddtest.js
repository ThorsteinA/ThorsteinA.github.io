const gridItems = [];
const result = document.getElementById("result");

const felles = document.querySelectorAll(".felles");
felles.forEach((card) => {
  card.addEventListener("click", fellessnu);
});

function fellessnu() {
  if (this.classList.contains("ikkesnudd")) {
    this.classList.remove("ikkesnudd");
    this.classList.add("snudd");
  } else if (this.classList.contains("snudd")) {
    this.classList.remove("snudd");
    this.classList.add("ikkesnudd");
  }

  result(); // Kjør resultatfunksjonen hver gang en rute snus
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 1000) + 1;
}

const playAgainButton = document.getElementById("playAgain");
playAgainButton.addEventListener("click", function() {
  gridItems.length = 0;
  updateGriditems();
  felles.forEach((card) => {
    card.classList.remove("ikkesnudd");
    card.classList.remove("snudd");
    card.classList.add("snudd");
  });
});

function updateGriditems() {
  for (let i = 1; i <= 16; i++) {
    const gridItem = document.querySelector(`.grid-item${i}`);
    const randomNumber = generateRandomNumber();
    gridItem.textContent = randomNumber;
    gridItems.push(randomNumber);
  }
}

function result() {
  const fellesRuter = document.querySelectorAll(".felles.ikkesnudd");
  
  if (fellesRuter.length === 0) {
    let vinnendeTall = null;

    for (let i = 1; i <= 16; i++) {
      const gridItemResult = document.querySelector(`.grid-item${i}`);
      const talletFraBoksen = parseInt(gridItemResult.textContent);
      
      if (!isNaN(talletFraBoksen)) {
        if (vinnendeTall === null) {
          vinnendeTall = talletFraBoksen;
        } else {
          if (talletFraBoksen === vinnendeTall) {
            console.log("Du vant!");
            return;
          }
        }
      }
    }
    
    console.log("Ingen vinnende kombinasjon funnet.");
  } else {
    console.log("Ikke alle ruter er 'ikkesnudd'.");
  }
}
