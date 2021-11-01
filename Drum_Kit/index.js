

// Way 1
// function handleClick() {
//     alert("I got clicked");
// }

// document.querySelector(".w").addEventListener("click", handleClick );

// Way 2
// document.querySelector(".w").addEventListener("click", function () {
//     alert("I got clicked");
//     // what to do when selected
// });
function playAudio(keyPressed) {
    console.log(keyPressed);
    switch (keyPressed) {
        case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;
        case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
        case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;
        case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;
        case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;
        case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;
        case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
            break;
        default:
            console.log(keyPressed)
            break;
    }
}

// Detecting Button Press
var button = document.querySelectorAll(".drum");
for (var i =0; i< button.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonHTML  = this.innerHTML;
        playAudio(buttonHTML);
        buttonAnimation(buttonHTML);
    });
}

// Detecting Key press
document.addEventListener("keydown", function(event) {
    playAudio(event.key);
    buttonAnimation(event.key);
});


function buttonAnimation(currentKey) {
    var actievButton = document.querySelector("." + currentKey);
    actievButton.classList.add('pressed');
    setTimeout(function(){
        actievButton.classList.remove("pressed");
    }, 100);

}

// var button = document.querySelector('button');
// button.addEventListener('click', event => {
//     button.textContent = `${event.detail}`;
//   });
