function isLandscapeMode() {
    return window.matchMedia("(orientation: landscape)").matches;
  }

//scroll bar

let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    if (isLandscapeMode()) {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
}

//text på main side

let textMainSide = document.querySelector(".sec-text");

function getRandomInt(min, max) {
    if (isLandscapeMode()) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }

function textLoad(){
    if (isLandscapeMode()) {
    let numberForText = getRandomInt(1, 12);
    if (numberForText === 1){
        textMainSide.textContent = "Thorstein Andreassen"
    }
    if (numberForText === 2){
        textMainSide.textContent = "en elev"
    }
    if (numberForText === 3){
        textMainSide.textContent = "en programmerer"
    }
    if (numberForText === 4){
        textMainSide.textContent = "interessert i å lære"
    }

    if (numberForText === 5){
        textMainSide.textContent = "en fitnessentusiast"
    }

    if (numberForText === 6){
        textMainSide.textContent = "en kodekunstner"
    }

    if (numberForText === 7){
        textMainSide.textContent = "en idrettsstudent"
    }

    if (numberForText === 8){
        textMainSide.textContent = "en programmeringsnerd"
    }

    if (numberForText === 9){
        textMainSide.textContent = "en kodeskaper"
    }

    if (numberForText === 10){
        textMainSide.textContent = "en skoleelsker"
    }

    if (numberForText === 11){
        textMainSide.textContent = "en kodeutvikler"
    }

    if (numberForText === 12){
        textMainSide.textContent = "i skolemodus"
    }
}
}

setInterval(textLoad, 4000)

textLoad();


function downloadURL(URL, fileName){
    if (isLandscapeMode()) {
    let link = document.createElement("a");
    link.setAttribute("download", fileName);
    link.href = URL;

    document.body.appendChild(link);
    link.click();
    link.remove();

    doneDownloadEl1.innerHTML="Your download is complete";
    }
}

let doneDownloadEl1 = document.querySelector(".doneDownload1");
let doneDownloadEl2 = document.querySelector(".doneDownload2");

function downloadProjectsURL(URL, fileName){
    if (isLandscapeMode()) {
    let link = document.createElement("a");
    link.setAttribute("download", fileName);
    link.href = URL;

    document.body.appendChild(link);
    link.click();
    link.remove();

    doneDownloadEl2.innerHTML="Your download is complete";
    }
}

document.querySelector(".seeMyCV").addEventListener('click', function () {
    document.querySelector(".seeThisPart").scrollIntoView({ behavior: 'smooth', });
}); 






  document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
  });