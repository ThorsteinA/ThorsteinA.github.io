
let quizEl = document.querySelector("#quiz");
let resultatEl = document.querySelector("#resultat");

// Array med spørsmål
let quiz = [
  { sporsmaal: "Hva er Newtons tredje lov, og hvordan kan den forklares?",
    alternativer: ["For hver handling er det en like stor og motsatt reaksjon.", "Objekt A påvirker ikke objekt B.", "Objekt A og B påvirker hverandre med samme kraft."],
    fasit: "For hver handling er det en like stor og motsatt reaksjon."},
  { sporsmaal: "Hva er bølge-partikkel dualitet i kvantemekanikk?",
    alternativer: ["Subatomære partikler kan oppvise både bølge- og partikkelegenskaper.", "Bølger og partikler er uavhengige fenomener.", "Det er ingen dualitet i kvantemekanikk."],
    fasit: "Subatomære partikler kan oppvise både bølge- og partikkelegenskaper."},
  { sporsmaal: "Hvordan påvirker temperatur endringen i tilstanden til et fast stoff, væske og gass?",
    alternativer: ["Økende temperatur kan føre til smelting og fordampning.", "Temperatur påvirker ikke tilstanden til stoffer.", "Reduksjon i temperatur påvirker bare faste stoffer."],
    fasit: "Økende temperatur kan føre til smelting og fordampning."},
  { sporsmaal: "Hva er forskjellen mellom RAM og lagringsplass på en datamaskin?",
    alternativer: ["RAM er permanent lagring, mens lagringsplass er midlertidig.", "RAM brukes til midlertidig lagring, mens lagringsplass er for permanent lagring.", "RAM brukes for permanent lagring, mens lagringsplass er midlertidig."],
    fasit: "RAM brukes til midlertidig lagring, mens lagringsplass er for permanent lagring."},
    { sporsmaal: "Forklar forskjellen mellom HTTP og HTTPS.",
    alternativer: ["HTTPS bruker en annen protokoll for dataoverføring.", "HTTP er sikret, mens HTTPS ikke er det.", "HTTP er usikret, mens HTTPS legger til kryptering for sikker dataoverføring."],
    fasit: "HTTP er usikret, mens HTTPS legger til kryptering for sikker dataoverføring."},
    { sporsmaal: "Hva er en SQL-injeksjon, og hvordan kan det forhindres?",
    alternativer: ["SQL-injeksjon er et verktøy for sikkerhetskopiering av SQL-databaser.", "SQL-injeksjon er en type databaseadministrasjon.", "SQL-injeksjon er et sikkerhetshull der skadelig SQL-kode injiseres."],
    fasit: "SQL-injeksjon er et sikkerhetshull der skadelig SQL-kode injiseres."},
    { sporsmaal: "Hva er derivasjon, og hvordan regnes den ut for en funksjon?",
    alternativer: ["Derivasjon måler endringen i en funksjon; den beregnes ved å finne grenseverdien til en kvotient.", "Derivasjon måler arealet under grafen til en funksjon.", "Derivasjon måler endringen i en funksjon; den beregnes ved å finne kvadratroten."],
    fasit: "Derivasjon måler endringen i en funksjon; den beregnes ved å finne grenseverdien til en kvotient."},
    { sporsmaal: "Hva er en determinant i lineær algebra?",
    alternativer: ["En determinant er en spesiell verdi tilordnet en kvadratisk matrise.", "En determinant er summen av elementene i en matrise.", "En determinant er differansen mellom elementene i en matrise."],
    fasit: "En determinant er en spesiell verdi tilordnet en kvadratisk matrise."},
    { sporsmaal: "Hva er den fundamentale teoremet om integralregning?",
    alternativer: ["Det fundamentale teoremet sier at integraler ikke kan beregnes.", "Integralregning har ingen fundamentale teoremer.", "Det fundamentale teoremet sier at derivasjon og integrasjon er inversprosesser."],
    fasit: "Det fundamentale teoremet sier at derivasjon og integrasjon er inversprosesser."},
    { sporsmaal: "Forklar begrepet elastisitet i økonomi.",
    alternativer: ["Elastisitet handler om stivhet i økonomiske priser.", "Elastisitet refererer til mengden av etterspørsel eller tilbud.", "Elastisitet måler responsen på endringer i pris eller inntekt."],
    fasit: "Elastisitet måler responsen på endringer i pris eller inntekt."},
    { sporsmaal: "Hva er forskjellen mellom mikroøkonomi og makroøkonomi?",
    alternativer: ["Mikroøkonomi studerer adferden til enkeltpersoner og bedrifter, mens makroøkonomi ser på økonomien som en helhet.", "Mikroøkonomi fokuserer på økonomien som helhet, mens makroøkonomi ser på enkeltpersoners atferd.", "Mikroøkonomi ser på økonomien som helhet, mens makroøkonomi fokuserer på enkeltpersoners atferd."],
    fasit: "Mikroøkonomi studerer adferden til enkeltpersoner og bedrifter, mens makroøkonomi ser på økonomien som en helhet."},
    { sporsmaal: "Vurder følgende integral: $$ \\int \\frac{x^3 + 2x^2 - 5}{\\sqrt{x + 1}} \\,dx $$",
    alternativer: ["$\\frac{2}{3}(x + 1)^{3/2} - \\frac{4}{5}(x + 1)^{5/2} - 2\\sqrt{x + 1} + C$", "$\\frac{2}{5}(x + 1)^{5/2} - \\frac{3}{4}(x + 1)^{3/2} + 2\\sqrt{x + 1} + C$", "$-\\frac{2}{5}(x + 1)^{5/2} + \\frac{3}{4}(x + 1)^{3/2} - 2\\sqrt{x + 1} + C$"],
    fasit: "$\\frac{2}{5}(x + 1)^{5/2} - \\frac{3}{4}(x + 1)^{3/2} + 2\\sqrt{x + 1} + C$"},

];

// Skriver spørsmålene til nettsiden
for (let i = 0; i < quiz.length; i++){
  // Lager et <div>-element til hvert spørsmål
  let sporsmaalEl = document.createElement("div");
  // Gir <div>-elementet klassen checkboxradio
  sporsmaalEl.className = "checkboxradio";
  // Lager et <h3>-elementet til spørsmålet
  let h3El = document.createElement("h3");
  // Legger til spørsmålet i <h3>-elementet
  h3El.innerHTML = quiz[i].sporsmaal;
  // Legger til <h3>-elementet i <div>-elementet
  sporsmaalEl.appendChild(h3El);

  // Lager elementer for hvert av alternativene
  for (let j = 0; j < quiz[i].alternativer.length; j++) {
    // Lager en <label>
    let labelEl = document.createElement("label");
    // Lager en radioknapp
    let radioEl = document.createElement("input");
    // Angir typen radio
    radioEl.type = "radio";
    // Bruker i som navn for å gi alternativene til samme spørsmål likt name
    radioEl.name = i;

    // Sjekker om dette alternativet er det riktige. 
    // Hvis det er riktig, bruker vi "riktig" som value, ellers "galt".
    if (quiz[i].fasit === quiz[i].alternativer[j]) {
      radioEl.value = "riktig";
    } else {
      radioEl.value = "galt";
    }
    
    // Legger til knappen i <label>-elementet
    labelEl.appendChild(radioEl);

    // Legger til svaralternativ
    labelEl.innerHTML += quiz[i].alternativer[j];

    // Legger til <label>-elementet i <div>-elementet
    sporsmaalEl.appendChild(labelEl);
  }

  // Legger til <div>-elementet i quiz-elementet
  quizEl.appendChild(sporsmaalEl);
}

// Legger til en knapp til slutt
let knappEl = document.createElement("button");
knappEl.innerHTML = "Sjekk svar";

// Legger til lytter på knappen
knappEl.addEventListener("click", finnPoeng);

// Legger til knappen på nettsiden
quizEl.appendChild(knappEl);

// Funksjon som beregner og skriver ut poengsum
function finnPoeng (){
  // Henter alle radioknapper på siden
  alleRadioEl = document.querySelectorAll("input[type='radio']");

  // Variabel for å telle poeng
  let antallPoeng = 0;

  // Går gjennom alle radioknappene
  for (var i = 0; i < alleRadioEl.length; i++) {
    // Hvis en radioknapp er haket av
    if (alleRadioEl[i].checked) {
      // Undersøk om alternativet er riktig
      if (alleRadioEl[i].value === "riktig") {
        // Hvis riktig, gi ett poeng
        antallPoeng ++;
      }
    }
  }

  resultatEl.innerHTML = "Du fikk " + antallPoeng + " poeng!";
}