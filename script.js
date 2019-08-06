var box = document.getElementById("box");
var countInput = document.getElementById("count");
var submitGuessButton = document.getElementById("submitGuess");
var actualCountDisplay = document.getElementById("actualCount");
var countDiffDisplay = document.getElementById("countDiff");
var playAgainButton = document.getElementById("playAgain");

var colors = ["red", "green", "blue"];
var actualCount;

submitGuessButton.addEventListener("click", submitGuess);
playAgainButton.addEventListener("click", playAgain);

generateBalls();

function generateBalls() {
    box.innerHTML = "";
    actualCount = Math.floor(Math.random() * 900) + 100;

    for (var i = 0; i < actualCount; i++) {
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        var randomLeft = Math.floor(Math.random() * 391);
        var randomTop = Math.floor(Math.random() * 391);

        var ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.backgroundColor = randomColor;
        ball.style.left = randomLeft + "px";
        ball.style.top = randomTop + "px";

        box.appendChild(ball);
    }
}

function submitGuess() {
    var guessedCount = parseInt(countInput.value, 10);

    if (!isNaN(guessedCount)) {
        var countDiff = Math.abs(actualCount - guessedCount);

        countInput.disabled = true;
        submitGuessButton.disabled = true;

        actualCountDisplay.style.display = "block";
        actualCountDisplay.innerHTML = "Actual count: " + actualCount;

        countDiffDisplay.style.display = "block";
        countDiffDisplay.innerHTML = "You are off by " + countDiff;

        playAgainButton.style.display = "initial";
    }
}

function playAgain() {
    countInput.value = "";

    countInput.disabled = false;
    submitGuessButton.disabled = false;

    actualCountDisplay.style.display = "none";
    actualCountDisplay.innerHTML = "";

    countDiffDisplay.style.display = "none";
    countDiffDisplay.innerHTML = "";

    playAgainButton.style.display = "none";

    generateBalls();
}
