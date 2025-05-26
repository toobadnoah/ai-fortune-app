async function revealFortune() {
  const button = document.querySelector("button");
  const fortuneDisplay = document.getElementById("fortune");
  button.disabled = true;
  fortuneDisplay.textContent = "Consulting the stars... 🌠";

  try {
    const response = await fetch("/api/fortune");
    const data = await response.json();
    fortuneDisplay.textContent = data.fortune;
  } catch (error) {
    fortuneDisplay.textContent = "🌩️ An error clouded your fortune.";
  }

  button.disabled = false;
}
