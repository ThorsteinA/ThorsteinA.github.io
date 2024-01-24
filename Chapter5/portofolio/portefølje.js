

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


function portraitNamePage(){
  if (isPortraitMode()){
  bodyEl.classList.add("hidden");
  bodyPhoneNameH1El.innerHTML = "Thorstein Andreassen";
  bodyPhoneNameP1El.innerHTML = "Jeg heter thorstein andreassen og går på lillestrøm vgs. Dette er min mobil versjon, av nettsiden/porteføljen min. Dersom du vil se en bedre versjonen av denne nettsiden. Åpne den på pcen din, der du har media orientation på landscape istedenfor portrait som er automatisk på mobil :DD"
  bodyPhoneNameP2El.innerHTML = "dette er kun for å vise at jeg kan putte inn ett bilde om jeg vil"
  console.log("hallaaaa")
  bodyPhoneNameImgEl.classList.remove("bodyPhoneNameImg2");
}
}

let bodyEl = document.querySelector(".body");
let bodyPhoneEl = document.querySelector(".bodyPhone");

let bodyPhoneNameEl = document.querySelector(".bodyPhoneName");
let bodyPhoneNameH1El = document.querySelector(".bodyPhoneNameH1");
let bodyPhoneNameP1El = document.querySelector(".bodyPhoneNameP1");
let bodyPhoneNameP2El = document.querySelector(".bodyPhoneNameP2");
let bodyPhoneNameImgEl = document.querySelector(".bodyPhoneNameImg");


let bodyPhoneInteresertEl = document.querySelector(".bodyPhoneInteresert");
let bodyPhoneMyCVEl = document.querySelector(".bodyPhoneMyCV");
let bodyPhoneDownload_CVEl = document.querySelector(".bodyPhoneDownload_CV");
let bodyPhoneMyProjectsEl = document.querySelector(".bodyPhoneMyProjects");
let bodyPhoneDownload_ProjectsEl = document.querySelector(".bodyPhoneDownload_Projects");