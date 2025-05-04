const target = Math.floor(Math.random() * 100) + 1;
let guess = null;

const input = document.getElementById("guessInput");
const button = document.getElementById("submitBtn");
const feedback = document.getElementById("feedback");

feedback.style.color = "#422800";

button.addEventListener("click", () => {
  guess = Number(input.value);

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "Enter a number between 1 and 100.";
    feedback.className = "fw-bold text-danger";
    return;
  }

  if (guess < target) {
    feedback.textContent = "this one to low homeslice";
  } else if (guess > target) {
    feedback.textContent = "thats not the number bruh go lower";
  } else {
    feedback.textContent = `yeah the number was ${target} good job dude.`;
    input.disabled = true;
    button.disabled = true;
  }

  input.value = ""; 
  input.focus();
});