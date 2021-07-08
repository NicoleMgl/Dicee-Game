var randomNumberLeft = Math.floor(Math.random() * 6) + 1;
var randomNumberRight = Math.floor(Math.random() * 6) + 1;

var leftImage = document.getElementsByClassName("img1")[0];
leftImage.setAttribute('src', `images/dice${randomNumberLeft}.png`);

var rightImage = document.getElementsByClassName("img2")[0];
rightImage.setAttribute('src', `images/dice${randomNumberRight}.png`);

if (randomNumberLeft > randomNumberRight) {
    document.querySelector("h1").innerHTML = `Player 1 Wins!`;
} else if (randomNumberRight > randomNumberLeft) {
    document.querySelector("h1").innerHTML = `Player 2 Wins!`;
} else {
    document.querySelector("h1").innerHTML = `Draw`;
};
