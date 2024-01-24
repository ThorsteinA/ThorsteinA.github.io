//Scroll delen på buy more

document.getElementById("scrollButton").addEventListener('click', function () {
    document.getElementById("buyMoreBitcoin").scrollIntoView({ behavior: 'smooth', });
});


//Ulike variabler

let buyButtonEl = document.querySelector(".buyButton");
let sellButtonEl = document.querySelector(".sellButton");
let selectMarketEl = document.querySelector("#selectMarket");
let currencySelectionEl = document.querySelector(".currencySelection");
let totalEl = document.querySelector(".total input");
let placeOrderEl = document.querySelector(".placeOrder");
let listEl = document.querySelector("#list");
let bitcoinKjøpt = [];

//Liten event listener

placeOrderEl.addEventListener("click", buyBTC);

//funksjonen buy bitcoin, Den registrer hvor mye du kjøpte for, hvor mange btc du fikk, og hvilket tidspunkt og hvilken kategori.
// Deretter putter der alt det inn i "transactionInfo"

function buyBTC() {
    let BTCvalue = 47000;
    let type = selectMarketEl.value;
    let totalValueUSDT = Number(totalEl.value);
    let totalValueBTC = (Math.round((totalValueUSDT / BTCvalue) * 100000) / 100000);
    let title = totalValueBTC + " BTC @ " + BTCvalue + " USDT";
    let DateNow = new Date();

    let year = DateNow.getFullYear();
    let month = DateNow.getMonth() + 1;
    let day = DateNow.getDate();
    let time = DateNow.getHours();
    let minutes = DateNow.getMinutes();
    let seconds = DateNow.getSeconds();

    let date = (day + "." + month + "." + year);
    let time1 = (time + ':' + minutes + ':' + seconds);

    let transactionInfo = {
        title: title,
        BTCvalue: BTCvalue,// + " USDT",
        type: type,
        totalValueUSDT: totalValueUSDT,// + " USDT",
        totalValueBTC: totalValueBTC,// + " BTC",
        date: date + " " + time1
    };


//Dytter alt av transaction info inn i arrayet som heter bitcoin kjøpt

    bitcoinKjøpt.push(transactionInfo);

    printList();
}




// Gir meg muligheten til å åpne og lukke de ulike transaksjonene, se her (åpne nettsiden, kjøp og åpne info under)

let flipped = [];

function updateEventListeners() {
    flipped = [];
    for (let i = 0; i < listEl.children.length; i++) {
        flipped[i] = false;
        listEl.children[i].setAttribute("onclick", "flipFocusListItem(" + i + ");")
    }
}

function flipFocusListItem(index) {
    if (!flipped[index]) {
        listEl.children[index].style.height = "fit-content";
    }
    if (flipped[index]) {
        listEl.children[index].style.height = "1.1em";
    }
    flipped[index] = !flipped[index];
    console.log(index + 1)
    listEl.children[index].setAttribute("id", flipped[index])
}

updateEventListeners();


// bruker en switch som basicly er det samme som en stor if løkke, forklar switchen

function sortCategori(){
    let categori = document.querySelector("#sortDropdown").value;
    console.log(categori);
    switch (categori) {
        case "kategori":
            sortListByCategori();
            break

        case "totalValueUSDT":
            sortListByPrice();
            break

        case "date":
            sortListByDate();
            break
    }
}

// lager en div som heter listItemEl, deretter stapper jeg masse p elementer inn i diven. Dette er her transactionInfo fra tidligere vises under

function printList() {
   listEl.innerHTML = "";

    for (let i = 0; i < bitcoinKjøpt.length; i++) {
        let listItemEl = document.createElement("div");
        listItemEl.className = "listItem";
        listItemEl.style.position = "relative";

//legger til

        let titleEl = document.createElement("p");
        let BTCvalueEl = document.createElement("p");
        let typeEl = document.createElement("p");
        let totalValueUSDTEl = document.createElement("p");
        let totalValueBTCEl = document.createElement("p");
        let dateEl = document.createElement("p");
        let transactionEl = document.createElement("div");
        titleEl.innerText = bitcoinKjøpt[i].title;
        titleEl.className = "title"
        BTCvalueEl.innerText = bitcoinKjøpt[i].BTCvalue + " USDT";
        typeEl.innerText = bitcoinKjøpt[i].type
        totalValueUSDTEl.innerText = bitcoinKjøpt[i].totalValueUSDT + " USDT";
        totalValueBTCEl.innerText = bitcoinKjøpt[i].totalValueBTC + " BTC";
        dateEl.innerText = bitcoinKjøpt[i].date + " " + bitcoinKjøpt[i].time1;
        transactionEl.className = "refund"
        transactionEl.innerHTML = "Refund Now"

        // refund
        transactionEl.addEventListener("click", refund);
        
        function refund(){
            listItemEl.remove();
        }

        listItemEl.appendChild(titleEl);
        listItemEl.appendChild(totalValueUSDTEl);
        listItemEl.appendChild(totalValueBTCEl);
        listItemEl.appendChild(typeEl);
        listItemEl.appendChild(dateEl);
        listItemEl.appendChild(transactionEl);
        listEl.appendChild(listItemEl);
    }
    updateEventListeners();
}

// Sorterings delen



function sortListByPrice() {
    for (let i = 0; i < bitcoinKjøpt.length - 1; i++) {
        console.log(bitcoinKjøpt[i].totalValueBTC)
        for (let j = i + 1; j < bitcoinKjøpt.length; j++) {
            if (bitcoinKjøpt[i].totalValueBTC > bitcoinKjøpt[j].totalValueBTC) {
                [bitcoinKjøpt[i], bitcoinKjøpt[j]] = [bitcoinKjøpt[j], bitcoinKjøpt[i]];
            }
        }
    }
    console.log(bitcoinKjøpt);
    printList();
}



function sortListByDate() {
    for (let i = 0; i < bitcoinKjøpt.length - 1; i++) {
        console.log(bitcoinKjøpt[i].date)
        for (let j = i + 1; j < bitcoinKjøpt.length; j++) {
            if (bitcoinKjøpt[i].date > bitcoinKjøpt[j].date) {
                [bitcoinKjøpt[i], bitcoinKjøpt[j]] = [bitcoinKjøpt[j], bitcoinKjøpt[i]];
            }
        }
    }
    console.log(bitcoinKjøpt);
    printList();
}

function sortListByCategori() {
    for (let i = 0; i < bitcoinKjøpt.length - 1; i++) {
        console.log(bitcoinKjøpt[i].type)
        for (let j = i + 1; j < bitcoinKjøpt.length; j++) {
            if (bitcoinKjøpt[i].type > bitcoinKjøpt[j].type) {
                [bitcoinKjøpt[i], bitcoinKjøpt[j]] = [bitcoinKjøpt[j], bitcoinKjøpt[i]];
            }
        }
    }
    console.log(bitcoinKjøpt);
    printList();
}

// lager det randome nummere som står der


document.addEventListener("DOMContentLoaded", function () {
    let movingElement = document.getElementById("bitcoinPrice2");

    setInterval(function () {
        let randomChange = (Math.random() * 21) - 10;
        let colorNumber = document.getElementById("bitcoinPrice2");
        let currentNumber = parseFloat(movingElement.innerText) || 480;
        let newNumber = Math.max(440, Math.min(520, currentNumber + randomChange));

        if (currentNumber >= newNumber) {
            colorNumber.style.color = "var(--colorBlind2)"
        }
        else {
            colorNumber.style.color = "var(--colorBlind1)"
        }

        movingElement.innerText = newNumber.toFixed(2);
    }, 250);
});


console.log(bitcoinKjøpt)

function sortChange() {
    console.log("Hello world")
}

// Farge blinde

let changeColors = document.getElementById("colorBlind");
changeColors.addEventListener("click", changeColor);
function changeColor() {
    console.log("hello world2")
    document.documentElement.style.setProperty('--colorBlind1', 'var(--notColorBlind1)');
    document.documentElement.style.setProperty('--colorBlind2', 'var(--notColorBlind2)');
}