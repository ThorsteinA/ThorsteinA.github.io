function getCasinoNumber(){
    return Math.floor(Math.random()*102);
}
function getYourNumber(){
    return Math.floor(Math.random()*102);
}
function casinoNumber(){
    const casinoNumberValue = getCasinoNumber();
    const yourNumberValue = getYourNumber();
    
    const casinoNumberElement = document.getElementById("casinoNumber");
    
    casinoNumberElement.textContent = "Casino Number: " + casinoNumberValue + " Your Number: " + yourNumberValue;

    if (casinoNumberValue === yourNumberValue) {
        window.location.href = "win.html"
    }

    else {
        const resultElement = document.getElementById("result");
        const casinoNumberElement = document.getElementById("casinoNumber");

        resultElement.textContent = "You lost, play again!";
        scale += 0.05;
        document.getElementById("doubleAmount").style.transform = "scale("+scale+", "+scale+")";
    }
}

let scale = 1.00;

let doubleAmount = document.getElementById("doubleAmount").addEventListener("click", doubleBetAmount);
const betAmount = document.getElementById("betAmount");
let tall = 200;

function doubleBetAmount(){
    betAmount.innerHTML = `bet is ${tall}`
    tall = tall*2;
    scale = 1;
    
    document.getElementById("doubleAmount").style.transform = "scale("+scale+", "+scale+")";
}

