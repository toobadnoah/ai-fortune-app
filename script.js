window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("reveal-button");
  const fortuneDisplay = document.getElementById("fortune");

  button.addEventListener("click", async () => {
    button.disabled = true;
    fortuneDisplay.textContent = "Consulting the stars... 🌠";

    try {
      const response = await fetch("/api/fortune");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      fortuneDisplay.textContent = data.fortune;
    } catch (error) {
      fortuneDisplay.textContent = "🌩️ An error clouded your fortune.";
      console.error("Error fetching fortune:", error);
    }

    button.disabled = false;
  });
});

