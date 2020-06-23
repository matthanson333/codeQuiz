const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = mostRecentScore;
  const user = username.value;
  console.log(mostRecentScore);
  console.log(username.value);

  if (user !== "") {
    let highscores =
      JSON.parse(window.localStorage.getItem("highScores")) || [];
    console.log("w/0 parse", window.localStorage.getItem("highScores"));

    console.log("w/ parse", highscores);

    let newScore = {
      score: score,
      userInitials: user,
    };

    highscores.push(newScore);
    console.log("new arr", highscores);

    window.localStorage.setItem("highScores", JSON.stringify(highscores));
  } else {
    alert("Please fill in username");
  }
};
