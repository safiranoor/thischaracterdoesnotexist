console.log ("test")

// classes uit html een ''class'' in js geven/ iets uit je html selecteren
var character = document.querySelector(".character");
var eyes1 = document.querySelector(".foto1")
var eyes2 = document.querySelector(".foto2")
var inputField = document.querySelector(".input_field")
var submitButton = document.querySelector(".submit_button")
var nameTag = document.querySelector(".nameTag")
var musicButton = document.querySelector(".mutingmusic");
var achtergrondMuziek = new Audio('./images/audioBeat.mp3');

var transparantFoto = document.querySelector(".transparant")
var Mond1 = document.querySelector(".foto3")
var Mond2 = document.querySelector(".foto4")

var complimentKnop = document.querySelector(".complimenten")
var h2 = document.querySelector(".compliment")
var complimentTekst = ["Wow","Perfect","Good","Nice"] // array

function handleCompliments(event){
  var randomComplimentjes = Math.random()* complimentTekst.length; //random complimentjes pakken uit array
  randomComplimentjes = Math.floor(randomComplimentjes);
  h2.textContent = complimentTekst[randomComplimentjes]; // tekst wordt complimentjes uit array
  event.preventDefault()
}

// dit zijn de instellingen van de audio, denk aan volume en de loop.
achtergrondMuziek.loop = true;
achtergrondMuziek.volume = 0.2;

// ALS de muziek gepauzeerd is en je klikt op de sound knop, gaat het geluid aan en laat hij img geluid.png zien. 
// Als dat ANDERS is (dus muziek = aan ipv paused) en je KLIKT dan pauseerd de muziek en zie je geen_geluid.png
// Je kan op de button drukken door addEventListener
function muteMusicPlayer() {
    if (achtergrondMuziek.paused) { // w
        achtergrondMuziek.play();
        musicButton.src = "./images/sound/geluid.png"
    } else {
        achtergrondMuziek.pause();
        musicButton.src = "./images/sound/geen_geluid.png"
    }
}
musicButton.addEventListener("click", muteMusicPlayer);

function handleEyes1(){
    character.src = "./images/character/eyes_op1.png";
}
eyes1.addEventListener("click", handleEyes1);

function handleEyes2(){
    character.src = "./images/character/eyes_op2.png";
}
eyes2.addEventListener("click", handleEyes2);

function handleMouth1(){
    transparantFoto.src = "./images/mondje1.png";
}
Mond1.addEventListener("click", handleMouth1);

function handleMouth2(){
    transparantFoto.src = "./images/mondje2.png";
}
Mond2.addEventListener("click", handleMouth2);

submitButton.addEventListener('click', handleSubmit); // als je klikt voer handleSubmit uit
function handleSubmit (event){ 
    event.preventDefault() // zorgt ervoor dat het niet refresht
    console.log ("hallo")
    nameTag.textContent = inputField.value // maak van de nametag de input van de form
}

complimentKnop.addEventListener("click", handleCompliments)

// class geven aan de gezichtjes > display none
// wanneer klik op knop verwijder klas 


