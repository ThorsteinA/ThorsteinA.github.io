

let aboutMeButtonEl = document.querySelector(".aboutMeButton");
let infoAboutMeEl = document.querySelector(".infoAboutMe");
let myCVButtonEl = document.querySelector(".myCVButton");
let infoMyCVEl = document.querySelector(".infoMyCV");
let myProjectsButtonEl = document.querySelector(".myProjectsButton");
let infoMyProjectsEl = document.querySelector(".infoMyProjects");
let hoverIfClickEl = document.querySelector(".hoverIfClick");
let arrowOneImageEl = document.querySelector(".arrowOneImage");
let arrowTwoImageEl = document.querySelector(".arrowTwoImage");
let arrowThreeImageEl = document.querySelector(".arrowThreeImage");

let startMainSideEl = document.querySelector(".startMainSide");

let aboutMeToggled = false;
let myCVToggled = false;
let myProjectsToggled = false;

aboutMeButtonEl.addEventListener("click", toggleAboutMe);
aboutMeButtonEl.addEventListener("touchstart", toggleAboutMe);

myCVButtonEl.addEventListener("click", toggleMyCV);
myCVButtonEl.addEventListener("touchstart", toggleMyCV);
myProjectsButtonEl.addEventListener("click", toggleMyProjects);
myProjectsButtonEl.addEventListener("touchstart", toggleMyProjects);

function toggleAboutMe() {
  console.log("test12121")
  if (!aboutMeToggled) {
    infoAboutMeEl.classList.add("shown");
    aboutMeToggled = true;
    arrowOneImageEl.style.transform = "rotate(90deg)";
  } else {
    reToggleAboutMe();
  }
}

function toggleMyCV() {
  if (!myCVToggled) {
    infoMyCVEl.classList.add("shown");
    myCVToggled = true;
    arrowTwoImageEl.style.transform = "rotate(90deg)";
  } else {
    reToggleMyCV();
  }
}

function toggleMyProjects() {
  if (!myProjectsToggled) {
    infoMyProjectsEl.classList.add("shown");
    myProjectsToggled = true;
    arrowThreeImageEl.style.transform = "rotate(90deg)";
  } else {
    reToggleMyProjects();
  }
}

function reToggleAboutMe() {
  infoAboutMeEl.classList.remove("shown");
  aboutMeToggled = false;
  arrowOneImageEl.style.transform = "rotate(-0deg)";
}

function reToggleMyCV() {
  infoMyCVEl.classList.remove("shown");
  myCVToggled = false;
  arrowTwoImageEl.style.transform = "rotate(-0deg)";
}

function reToggleMyProjects() {
  infoMyProjectsEl.classList.remove("shown");
  myProjectsToggled = false;
  arrowThreeImageEl.style.transform = "rotate(-0deg)";
}

let nameAboutMeEl = document.querySelector(".nameAboutMe");
let interesertAboutMeEl = document.querySelector(".interesertAboutMe");
// let formelAboutMeEl = document.querySelector(".formelAboutMe");

let myCVAboutMeEl = document.querySelector(".myCVAboutMe");
let downloadCVAboutMeEl = document.querySelector(".download_CVAboutMe");

let myProjectsAboutMeEl = document.querySelector(".myProjectsAboutMe");
let downloadProjectsAboutMeEl = document.querySelector(
  ".download_ProjectsAboutMe"
);

let explorerTopText = document.querySelector(".explorerTopText");

let interesertAboutMeSideEl = document.querySelector(".interesertAboutMeSide");
// let formelAboutMeSideEl = document.querySelector(".formelAboutMeSide");
let nameAboutMeSideEl = document.querySelector(".nameAboutMeSide");

let myCVSideEl = document.querySelector(".myCVSide");
let downloadCVSideEl = document.querySelector(".downloadCVSide");

let myProjectsSideEl = document.querySelector(".myProjectsSide");
let downloadProjectsSideEl = document.querySelector(
  ".downloadProjectsSide"
);

let footerEl = document.querySelector(".footer");

explorerTopText.addEventListener("click", ()=> togglePage("mainSide"));
explorerTopText.addEventListener("touchstart", ()=> togglePage("mainSide"));

nameAboutMeEl.addEventListener("click", () => togglePage("name"));
nameAboutMeEl.addEventListener("touchstart", () => togglePage("name"));

interesertAboutMeEl.addEventListener("click", () => {
  togglePage("interesert");
});
interesertAboutMeEl.addEventListener("touchstart", () => {
  togglePage("interesert");
});

myCVAboutMeEl.addEventListener("click", () => togglePage("myCV"));
myCVAboutMeEl.addEventListener("touchstart", () => togglePage("myCV"));


downloadCVAboutMeEl.addEventListener("click", () => {
  togglePage("downloadCV");
});
downloadCVAboutMeEl.addEventListener("touchstart", () => {
  togglePage("downloadCV");
});

myProjectsAboutMeEl.addEventListener("click", () => {
  togglePage("myProjects");
});
myProjectsAboutMeEl.addEventListener("touchstart", () => {
  togglePage("myProjects");
});

downloadProjectsAboutMeEl.addEventListener("click", () =>
  togglePage("downloadProjects")
);
downloadProjectsAboutMeEl.addEventListener("touchstart", () =>
  togglePage("downloadProjects")
);

function toggleOffAllPages() {
  nameAboutMeSideEl.classList.add("hidden");
  interesertAboutMeSideEl.classList.add("hidden");
  // formelAboutMeSideEl.classList.add("hidden");

  nameAboutMeSideEl.classList.remove("show");
  interesertAboutMeSideEl.classList.remove("show");
  // formelAboutMeSideEl.classList.remove("show");

  myCVSideEl.classList.add("hidden");
  downloadCVSideEl.classList.add("hidden");

  myCVSideEl.classList.remove("show");
  downloadCVSideEl.classList.remove("show");

  myProjectsSideEl.classList.add("hidden");
  downloadProjectsSideEl.classList.add("hidden");

  myProjectsSideEl.classList.remove("show");
  downloadProjectsSideEl.classList.remove("show");

  startMainSideEl.classList.add("hidden");

  startMainSideEl.classList.remove("show");

  // footerEl.classList.add("hidden");
  // footerEl.classList.remove("show");

}

function togglePage(page) {
  toggleOffAllPages();

  if (page == "name") {
    nameAboutMeSideEl.classList.remove("hidden");
    nameAboutMeSideEl.classList.add("show");
    //     footerEl.classList.remove("show");
    // footerEl.classList.add("hidden");
  }

  if (page == "interesert") {
    interesertAboutMeSideEl.classList.remove("hidden");
    interesertAboutMeSideEl.classList.add("show");
    //     footerEl.classList.remove("show");
    // footerEl.classList.add("hidden");
  }

  if (page == "myCV") {
    myCVSideEl.classList.remove("hidden");
    myCVSideEl.classList.add("show");
    //     footerEl.classList.remove("show");
    // footerEl.classList.add("hidden");
  }

  if (page == "downloadCV") {
    downloadCVSideEl.classList.remove("hidden");
    downloadCVSideEl.classList.add("show");
    //     footerEl.classList.remove("show");
    // footerEl.classList.add("hidden");
  }

  if (page == "myProjects") {
    myProjectsSideEl.classList.remove("hidden");
    myProjectsSideEl.classList.add("show");
    // footerEl.classList.remove("show");
    // footerEl.classList.add("hidden");
  }

  if (page == "downloadProjects") {
    downloadProjectsSideEl.classList.remove("hidden");
    downloadProjectsSideEl.classList.add("show");
    // footerEl.classList.remove("show");
    // footerEl.classList.add("hidden");
  }

  if (page == "mainSide") {
    startMainSideEl.classList.remove("hidden");
    startMainSideEl.classList.add("show");
    // footerEl.classList.add("show");
    // footerEl.classList.remove("hidden")
  }
}


function isPortraitMode() {
  return window.matchMedia("(orientation: portrait)").matches;
}



nameAboutMeEl.addEventListener("click", portraitNamePage);




let bodyEl = document.querySelector(".body");
let bodyPhoneEl = document.querySelector(".bodyPhone");

let bodyPhoneNameEl = document.querySelector(".bodyPhoneName");
let bodyPhoneNameH1El = document.querySelector(".bodyPhoneNameH1");
let bodyPhoneNameP1El = document.querySelector(".bodyPhoneNameP1");
let bodyPhoneNameP2El = document.querySelector(".bodyPhoneNameP2");
let bodyPhoneNameImg1El = document.querySelector(".bodyPhoneNameImg1");
let bodyPhoneNameImg2El = document.querySelector(".bodyPhoneNameImg2");
let phoneFooterEl = document.querySelector(".phoneFooter");



let goBackArrowEl = document.querySelector(".goBackArrow");
goBackArrowEl.addEventListener("click", goBack);

function portraitNamePage(){
  if (isPortraitMode()){
  bodyEl.classList.add("hidden");
  bodyPhoneNameH1El.innerHTML = "Thorstein Andreassen";
  bodyPhoneNameP1El.innerHTML = "Jeg heter thorstein andreassen og går på lillestrøm vgs. Dette er min mobil versjon, av nettsiden/porteføljen min. Dersom du vil se en bedre versjonen av denne nettsiden. Åpne den på pcen din, der du har media orientation på landscape istedenfor portrait som er automatisk på mobil :DD"
  bodyPhoneNameP2El.innerHTML = "dette er kun for å vise at jeg kan putte inn ett bilde om jeg vil"
  console.log(bodyPhoneNameImg2El.classList)
  bodyPhoneNameImg2El.classList.remove("bodyPhoneNameImg2");
  goBackArrowEl.style.display = "block";
}
}

function goBack(){{
    if (isPortraitMode()){
    bodyEl.classList.remove("hidden");
    bodyPhoneNameH1El.innerHTML = "";
    bodyPhoneNameP1El.innerHTML = "";
    bodyPhoneNameP2El.innerHTML = "";
    bodyPhoneInteresertH1El.innerHTML = "";
    bodyPhoneInteresertP1El.innerHTML = "";
    bodyPhoneInteresertP2El.innerHTML = "";
    bodyPhoneMyCVH1El.innerHTML = "";
    bodyPhoneMyCVTextEl.innerHTML = "";
    console.log(bodyPhoneNameImg2El.classList)
    bodyPhoneNameImg2El.classList.add("bodyPhoneNameImg2");
    bodyPhoneInteresertImg2El.classList.add("bodyPhoneInteresertImg2");
    goBackArrowEl.style.display = "none";
    myCVSideEl.classList.remove("show");
  }
  }
}











let bodyPhoneInteresertEl = document.querySelector(".bodyPhoneInteresert");
let bodyPhoneMyCVEl = document.querySelector(".bodyPhoneMyCV");
let bodyPhoneDownload_CVEl = document.querySelector(".bodyPhoneDownload_CV");
let bodyPhoneMyProjectsEl = document.querySelector(".bodyPhoneMyProjects");
let bodyPhoneDownload_ProjectsEl = document.querySelector(".bodyPhoneDownload_Projects");
let bodyPhoneMyProjectsH1El = document.querySelector(".bodyPhoneMyProjectsH1");







interesertAboutMeEl.addEventListener("click", portraitInteresertPage);






let bodyPhoneInteresertH1El = document.querySelector(".bodyPhoneInteresertH1");
let bodyPhoneInteresertP1El = document.querySelector(".bodyPhoneInteresertP1");
let bodyPhoneInteresertP2El = document.querySelector(".bodyPhoneInteresertP2");
let bodyPhoneInteresertImg2El = document.querySelector(".bodyPhoneInteresertImg2");
let bodyPhoneInteresertImg3El = document.querySelector(".bodyPhoneInteresertImg3");
let bodyPhoneMyCVTextEl = document.querySelector(".bodyPhoneMyCVText");
let myCVSeeEl = document.querySelector(".myCVSee");
let seeMyCVEl = document.querySelector(".seeMyCV");
myProjectsAboutMeEl.addEventListener("click", checkProjects);
let bodyPhoneMyProjectsLinkEl = document.querySelector(".bodyPhoneMyProjectsLink");

let bodyPhoneMyCVH1El = document.querySelector(".bodyPhoneMyCVH1")

goBackArrowEl.addEventListener("click", goBack);

function portraitInteresertPage(){
  if (isPortraitMode()){
  bodyEl.classList.add("hidden");
  bodyPhoneNameH1El.innerHTML = "Hva jeg er interesert i";
  bodyPhoneNameP1El.innerHTML = "Jeg synes mye er kult, blant annet it er fett. Jeg liker også å trene, mer spesifikt bryting og styrke"
  bodyPhoneNameP2El.innerHTML = "Her har dere ett bilde som kan være relevant"
  console.log(bodyPhoneNameImg2El.classList)
  bodyPhoneInteresertImg2El.classList.remove("bodyPhoneInteresertImg2");
  goBackArrowEl.style.display = "block";
}
}

myCVAboutMeEl.addEventListener("click", bodyPhoneCV)

function bodyPhoneCV(){
  if (isPortraitMode()){
    bodyEl.classList.add("hidden");
    bodyPhoneMyCVH1El.innerHTML = "trykk her for å se min CV";
    goBackArrowEl.style.display = "block";
}}

bodyPhoneMyCVEl.addEventListener("click", checkCV);

function checkCV() {
  if (isPortraitMode()){
  bodyPhoneMyCVEl.style.display = "none";
  bodyPhoneMyCVTextEl.innerHTML = "Jeg er en entusiastisk 17-åring med en lidenskap for programmering og en sterk akademisk bakgrunn innen realfag. Min erfaring inkluderer arbeid på en golfbane, hvor jeg utviklet gode teamarbeids- og kommunikasjonsevner. Videre har jeg arbeidet på en gård, hvor jeg har utviklet fysiske ferdigheter og ansvarsbevissthet. Jeg har også drevet med hagearbeid for andre, demonstrert mine organisatoriske evner og kreative tilnærming til oppgaver. Min interesse for teknologi og koding har ført til at jeg har utforsket flere programmeringsspråk og prosjekter på egenhånd. Som en dedikert og lærevillig person, er jeg ivrig etter å utvide mine ferdigheter og bidra til teknologiske løsninger. For ytterligere informasjon om min bakgrunn og prosjekter, oppfordrer jeg deg til å besøke min nettside på pc-versjonen. Jeg ser frem til å diskutere hvordan mine ferdigheter og lidenskaper kan bidra til deres team.";
  bodyPhoneMyCVH1El.style.display = "none";
  bodyPhoneMyCVEl.style.display = "block";
}}

function checkProjects() {
  if (isPortraitMode()){
  bodyEl.classList.add("hidden");
  bodyPhoneMyProjectsLinkEl.style.display = "block";
  goBackArrowEl.style.display = "block";
  phoneFooterEl.classList.add("projectsPhoneFooter");
  phoneFooterEl.classList.remove("phoneFooter")
  bodyPhoneMyProjectsH1El.innerHTML = "under ser du mine prosjekter, for å kunne bruke de ordentlig må du være på pc. Grunnet at jeg hadde disse prosjektene før vi lærte om mobil modus"
}}
