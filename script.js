let userInputEle = document.getElementById("userInput");
let resultEle = document.getElementById("gameResult");

let randomNum = Math.ceil(Math.random() * 100);
console.log(randomNum);

function checkGuess() {
  let valEle = userInputEle.value;
  if (valEle === "") {
    resultEle.textContent = "Enter a Number ..!";
  } else if (Number(valEle) != "") {
    if (Number(valEle) === randomNum) {
      resultEle.textContent = "You Won ...!";
      resultEle.style.color = "green";
    } else if (Number(valEle) < randomNum) {
      resultEle.textContent = "Number is Too Low...!";
      resultEle.style.color = "blueS";
    } else if (Number(valEle) > randomNum) {
      resultEle.textContent = "Number is Too High...!";
      resultEle.style.color = "red";
    }
  }
}
