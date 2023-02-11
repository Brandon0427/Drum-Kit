//////La seccion de Javascript es como declarar interrupciones//////


////////// Evento y Accion para escuchar click en boton //////////////

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(i=0; i<numberOfDrumButtons; i++){
    // document.querySelectorAll(".drum") : Grabs all elements that have the class drum
    // [i] loop through all the elements
    // .addEventListener("click", handleCLick) : When it detects a click it does the function handleClik
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick(){
    var audioSelector = this.innerHTML.trim(); //Se le puso la funcion trim porque por razones desconocidas tenia espacio antes y despues de leer la letra.
    var audioDuration = makeSound(audioSelector);
    buttonPressed(audioSelector, audioDuration);
}


////////// Evento y Accion para escuchar click en teclado //////////////

document.addEventListener("keypress", keyboardClick);

function keyboardClick(){
    var audioSelector = event.key.trim();
    var audioDuration = makeSound(audioSelector);
    buttonPressed(audioSelector, audioDuration);
}


////////// Funcion para reproducir sonido y colorear tecla //////////////

function makeSound(audioSelector){
    var audioDuration = 0;

    switch (audioSelector){

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            audioDuration = 1000;
        break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            audioDuration = 1600;
        break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            audioDuration = 1200;
        break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            audioDuration = 1300;
        break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            audioDuration = 2000;
        break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            audioDuration = 500;
        break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            audioDuration = 1500;
        break;

        default:
            alert("Chispas! Ese boton no tiene audio asignado!");
    }

    return audioDuration;
}

function buttonPressed(audioSelector, audioDuration){
    var buttonPressed = document.querySelector("." + audioSelector);

    if (audioSelector == "w" || audioSelector == "a" || audioSelector == "s" ||
    audioSelector == "d" || audioSelector == "j" || audioSelector == "k" || audioSelector == "l"){

        buttonPressed.style.color = "white";  //sets the font of the pressed button to white for (aprox) as long as the the audio plays
        buttonPressed.classList.add("pressed");
        setTimeout(()=> {
            buttonPressed.classList.remove("pressed");
            buttonPressed.style.color = "#DA0463";
            }
        ,audioDuration);

    }
    else{
        console.log("El boton presionado fue: " + audioSelector);
    }
}