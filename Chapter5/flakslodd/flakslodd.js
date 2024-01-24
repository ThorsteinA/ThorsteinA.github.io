const gridItems = [];
const result = document.getElementById("result");

const felles = document.querySelectorAll(".felles")
felles.forEach((card) => card.addEventListener("click", fellessnu))

function fellessnu() {
    this.classList.toggle("snudd")
    this.classList.toggle("ikkesnudd")
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
}

const playAgainButton = document.getElementById("playAgain");
playAgainButton.addEventListener("click", function() {
    gridItems.length = 0;
    updateGriditems();
    felles.forEach((card) => card.classList.remove("ikkesnudd"))
    felles.forEach((card) => card.classList.add("snudd"))
});

function updateGriditems() {
    for (let i = 1; i <= 16; i++) {
        const gridItem = document.querySelector(`.grid-item${i}`);
        const randomNumber = generateRandomNumber();
        gridItem.textContent = randomNumber;
        gridItems.push(randomNumber);
    }
}

const oppdaterBetAmount = document.getElementById("refreshBet");
oppdaterBetAmount.addEventListener("click", nyBet)
const brukerTallInput = document.getElementById("brukerTall");
brukerTallInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      nyBet();
    }
  });

function nyBet(){
    const gammelBet = document.getElementById("betAmount");

    const nyBetAmount = brukerTallInput.value;
    gammelBet.textContent = `bet is ${nyBetAmount}$`;
    brukerTallInput.value = ""
}
  
