

function roll_dice() {
    var randomNumber = Math.floor(Math.random() *6) +1;
    return randomNumber;
}
// console.log(roll_dice());
var player1 = roll_dice()
var player2 = roll_dice()

var imageName1 = "images/dice" + player1 + ".png";
var imageName2 = "images/dice" + player2 + ".png";

document.querySelector(".player1 img").setAttribute("src", imageName1);
document.querySelector(".player2 img").setAttribute("src", imageName2);

if (player1 > player2) {
    document.querySelector("h1").textContent = "  Player 1 Wins!";
} else if (player2 > player1) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
    document.querySelector("h1").textContent = "Draw!";
}