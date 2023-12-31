const heads = document.querySelector("#toss");
const selectHead = document.querySelector("#selectHead");
const selectTails = document.querySelector("#selectTails");
const output = document.querySelector(".result");

function toss(face) {
  let message = "";
  if (face === "heads") selectHead.style.borderColor = "red";
  else selectTails.style.borderColor = "red";

  let turns = Math.round(Math.random());
  let count = 0;
  choice = setInterval(() => {
    if (count === 7 + turns) {
      clearInterval(choice);
    } else {
      if (count % 2 === 0) {
        heads.src = "heads.jpg";
        count++;
      } else {
        heads.src = "tails.jpg";
        count++;
      }
    }
  }, 200);

  if ((face === "heads" && turns === 0) || (face === "tails" && turns === 1))
    message = "You've won";
  else message = "You've lost";

  setTimeout(() => {
    output.innerHTML = message;
    selectHead.style.borderColor = "grey";
    selectTails.style.borderColor = "grey";
  }, 1600);
}

selectHead.addEventListener("click", () => {
  if (
    selectHead.style.borderColor != "red" &&
    selectTails.style.borderColor != "red"
  )
    toss("heads");
});
selectTails.addEventListener("click", () => {
  if (
    selectHead.style.borderColor != "red" &&
    selectTails.style.borderColor != "red"
  )
    toss("tails");
});
