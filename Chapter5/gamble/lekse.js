const STEIN = "stein"
const SAKS = "saks"
const PAPIR = "papir"
 
let spillerPoeng = 0;
let dataPoeng = 0;
let poengTavle = document.getElementById("poengtavle");
 
let start = document.getElementById("start");
start.addEventListener("click", spillSide);
 
let spill = document.getElementById("spill");
 
let stein = document.getElementById("stein");
stein.addEventListener("click", () => sjekkVinner(STEIN));
 
let saks = document.getElementById("saks");
saks.addEventListener("click", () => sjekkVinner(SAKS));
 
let papir = document.getElementById("papir");
papir.addEventListener("click", () => sjekkVinner(PAPIR));
 
let resultat = document.getElementById("resultat");
 
let popup = document.getElementById("popup");
 
 
 
function spillSide() {
    start.classList.add("hidden");
    spill.classList.toggle("hidden");
    skrivUtResultat();
}
 
function sjekkVinner(spillerValg) {
    let dataValg = Math.floor(Math.random() * 3);
    let valgListe = [STEIN, SAKS, PAPIR]
    let dataVaVerdi = valgListe[dataValg];
 
    console.log(dataVaVerdi, spillerValg);
 
    if (dataVaVerdi == spillerValg) {
        console.log("Uavgjort");
        resultat.innerHTML = "Uavgjort, begge valgte " + dataVaVerdi + ".";
    } else if (dataVaVerdi == STEIN && spillerValg == PAPIR
        || dataVaVerdi == PAPIR && spillerValg == SAKS
        || dataVaVerdi == SAKS && spillerValg == STEIN) {
        console.log("Du vant!");
        resultat.innerHTML = "Du vant! Maskina valgte " + dataVaVerdi + ".";
        spillerPoeng++;
    } else {
        console.log("Taper!")
        resultat.innerHTML = "Du tapte! Maskina valgte " + dataVaVerdi  + ".";
        dataPoeng++;
    }
 
    skrivUtResultat()
}
 
function skrivUtResultat() {
    poengTavle.innerHTML = `Computer: ${dataPoeng} <br>
                            Dine poeng: ${spillerPoeng}`
    if (spillerPoeng >= 5 || dataPoeng >= 5) {
        visResultat();
    }
}
 
function visResultat() {
    popup.classList.toggle("hidden");
}
 
function startNyttSpill() {
    sjekkVinner()
    dataPoeng = 0;
    spillerPoeng = 0;
    resultat.innerHTML = "";
    skrivUtResultat();
}