
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function playSound(name){
    var audio = new Audio(name);
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function nextSequence(started){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var nameOfAudio = "sounds/" +  randomChosenColour + ".mp3"
    playSound(nameOfAudio);

    if (started === false) {
        level = 0;
        $("#level-title").text("Level " + level);
        level++;
        started = true;
    } else {
        $("#level-title").text("Level " + level);
        level++;
        userClickedPattern = [];
        console.log("called nextSequence() for level " + (level-1));
    }
}
function gameOver() {
    playSound("sounds/wrong.mp3");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);

    gamePattern = [];
    userClickedPattern = [];
    started = false;
    level = 0;
    // return false;
}

function checkAnswer(currentLevel) {
    console.log("Game Pattern: " + gamePattern);
    console.log("User Clicked Pattern: " + userClickedPattern);

    for (var i = 0; i < userClickedPattern.length; i++) {
        if (userClickedPattern[i] === gamePattern[i]) {
            // good
        } else {
            gameOver();
        }
    }
    console.log(i);
    if (i == gamePattern.length) {
        nextSequence();
        console.log("COmpleted Level Successfully")
    } else if ( i< gamePattern.length) {
        console.log(i + " is less than " + gamePattern.length)
    }

    // if(userClickedPattern[userClickedPattern.length - 1] === gamePattern[gamePattern.length - 1]) {
    //     if (currentLevel == level) {
    //         console.log ("Success");
    //         userClickedPattern = [];
    //         nextSequence();
    //     } else if (currentLevel > level) {
    //         console.log("Failed because currentLevel > level")
    //         gameOver()
    //     }
    // } else {
    //     console.log ("Failed becuase ");
    //     gameOver();
    // }
}


$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    var nameOfAudio = "sounds/" +  userChosenColour + ".mp3"
    playSound(nameOfAudio);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
})

$(document).keydown(function (e) { 

    if(started === true){
        console.log("Game is already running, press button to play the game")
    } else {
        console.log("STarting Game ....")
        nextSequence(started);
    }
});