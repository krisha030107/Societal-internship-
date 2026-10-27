// ================= MENU =================

const links = document.querySelectorAll(".menu-link");
const pages = document.querySelectorAll(".page");

links.forEach(link => {

link.addEventListener("click",function(e){

e.preventDefault();

links.forEach(item=>item.classList.remove("active"));

this.classList.add("active");

const page=this.dataset.page;

pages.forEach(section=>{

section.style.display="none";

});

document.getElementById(page).style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

});

// Default

pages.forEach((page,index)=>{

if(index===0){

page.style.display="block";

}else{

page.style.display="none";

}

});
// ================= LOADER =================

window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").classList.add("loader-hide");

},1200);

});
//================ BACK TO TOP ================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",function(){

if(window.scrollY>250){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
//================ SCROLL PROGRESS BAR ================

window.addEventListener("scroll",function(){

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/scrollHeight)*100;

document.getElementById("progressBar").style.width=progress+"%";

});
/* ================= ENERGY EXPLORER ================= */

const openEnergy = document.getElementById("openEnergy");
const backAbout = document.getElementById("backAbout");

const about = document.getElementById("about");
const energyExplorer = document.getElementById("energyExplorer");

if(openEnergy && backAbout && about && energyExplorer){

openEnergy.addEventListener("click",function(){

about.style.display="none";
energyExplorer.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

backAbout.addEventListener("click",function(){

energyExplorer.style.display="none";
about.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}
/* ================= SOLAR PAGE ================= */

const solarCard=document.getElementById("solarCard");
const solarPage=document.getElementById("solarPage");
const backExplorer=document.getElementById("backExplorer");

if(solarCard && solarPage && backExplorer){

solarCard.addEventListener("click",function(){

energyExplorer.style.display="none";
solarPage.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

backExplorer.addEventListener("click",function(){

solarPage.style.display="none";
energyExplorer.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}
/* ================= WIND PAGE ================= */

const windCard = document.getElementById("windCard");

const windPage = document.getElementById("windPage");

const backExplorerWind = document.getElementById("backExplorerWind");

if(windCard && windPage && backExplorerWind){

windCard.addEventListener("click",function(){

energyExplorer.style.display="none";

windPage.style.display="block";

window.scrollTo({

top:0,

behavior:"smooth"

});

});

backExplorerWind.addEventListener("click",function(){

windPage.style.display="none";

energyExplorer.style.display="block";

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}
/* ================= HYDRO PAGE ================= */

const hydroCard=document.getElementById("hydroCard");

const hydroPage=document.getElementById("hydroPage");

const backExplorerHydro=document.getElementById("backExplorerHydro");

if(hydroCard && hydroPage && backExplorerHydro){

hydroCard.addEventListener("click",function(){

energyExplorer.style.display="none";

hydroPage.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

backExplorerHydro.addEventListener("click",function(){

hydroPage.style.display="none";

energyExplorer.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}
/* ================= BIOMASS PAGE ================= */

const biomassCard=document.getElementById("biomassCard");

const biomassPage=document.getElementById("biomassPage");

const backExplorerBiomass=document.getElementById("backExplorerBiomass");

if(biomassCard && biomassPage && backExplorerBiomass){

biomassCard.addEventListener("click",function(){

energyExplorer.style.display="none";

biomassPage.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

backExplorerBiomass.addEventListener("click",function(){

biomassPage.style.display="none";

energyExplorer.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}
/* ================= GEOTHERMAL PAGE ================= */

const geothermalCard=document.getElementById("geothermalCard");

const geothermalPage=document.getElementById("geothermalPage");

const backExplorerGeothermal=document.getElementById("backExplorerGeothermal");

if(geothermalCard && geothermalPage && backExplorerGeothermal){

geothermalCard.addEventListener("click",function(){

energyExplorer.style.display="none";

geothermalPage.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

backExplorerGeothermal.addEventListener("click",function(){

geothermalPage.style.display="none";

energyExplorer.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}
/* ================= COAL PAGE ================= */

const coalCard = document.getElementById("coalCard");
const coalPage = document.getElementById("coalPage");
const backExplorerCoal = document.getElementById("backExplorerCoal");

if(coalCard && coalPage && backExplorerCoal){

coalCard.addEventListener("click",function(){

energyExplorer.style.display="none";
coalPage.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

backExplorerCoal.addEventListener("click",function(){

coalPage.style.display="none";
energyExplorer.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}
/* ================= NATURAL GAS PAGE ================= */

const gasCard=document.getElementById("gasCard");

const gasPage=document.getElementById("gasPage");

const backExplorerGas=document.getElementById("backExplorerGas");

if(gasCard && gasPage && backExplorerGas){

gasCard.addEventListener("click",function(){

energyExplorer.style.display="none";

gasPage.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

backExplorerGas.addEventListener("click",function(){

gasPage.style.display="none";

energyExplorer.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}
/* ================= OIL PAGE ================= */

const oilCard=document.getElementById("oilCard");

const oilPage=document.getElementById("oilPage");

const backExplorerOil=document.getElementById("backExplorerOil");

if(oilCard && oilPage && backExplorerOil){

oilCard.addEventListener("click",function(){

energyExplorer.style.display="none";

oilPage.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

backExplorerOil.addEventListener("click",function(){

oilPage.style.display="none";

energyExplorer.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}
/* ================= NUCLEAR PAGE ================= */

const nuclearCard=document.getElementById("nuclearCard");

const nuclearPage=document.getElementById("nuclearPage");

const backExplorerNuclear=document.getElementById("backExplorerNuclear");

if(nuclearCard && nuclearPage && backExplorerNuclear){

nuclearCard.addEventListener("click",function(){

energyExplorer.style.display="none";

nuclearPage.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

backExplorerNuclear.addEventListener("click",function(){

nuclearPage.style.display="none";

energyExplorer.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}
/*==================================================
SMART ENERGY SOLUTIONS
==================================================*/

// Open Smart Energy Solutions Page

const openSolutions = document.getElementById("openSolutions");
const solutionPage = document.getElementById("solutionPage");
const backSolution = document.getElementById("backSolution");

if (openSolutions) {

    openSolutions.addEventListener("click", function () {

        // Hide About Page
        about.style.display = "none";

        // Show Solution Page
        solutionPage.style.display = "block";

        // Scroll Top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// Back Button

if (backSolution) {

    backSolution.addEventListener("click", function () {

        solutionPage.style.display = "none";

        about.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// Smooth Scroll Hero Button

const heroBtn = document.querySelector(".hero-btn");

if (heroBtn) {

    heroBtn.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector("#problem");

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}
/* ================= GALLERY IMAGE ZOOM ================= */

function openGallery(image){

    const modal = document.getElementById("imageModal");
    const zoomedImage = document.getElementById("zoomedImage");

    zoomedImage.src = image.src;

    modal.style.display = "flex";

}


function closeGallery(){

    document.getElementById("imageModal").style.display = "none";

}


/* Close when clicking outside image */

document.getElementById("imageModal").addEventListener("click",function(e){

    if(e.target === this){

        closeGallery();

    }

});