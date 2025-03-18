// ...existing code...
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Function to apply dark mode to all relevant elements
function applyDarkMode() {
  document.body.classList.add("dark-mode");
  document.querySelector("header").classList.add("dark-mode");
  document.querySelectorAll(".activity-card").forEach(card => card.classList.add("dark-mode"));
  document.querySelectorAll("section, footer, form").forEach(el => el.classList.add("dark-mode"));
}

// Function to remove dark mode from all relevant elements
function removeDarkMode() {
  document.body.classList.remove("dark-mode");
  document.querySelector("header").classList.remove("dark-mode");
  document.querySelectorAll(".activity-card").forEach(card => card.classList.remove("dark-mode"));
  document.querySelectorAll("section, footer, form").forEach(el => el.classList.remove("dark-mode"));
}

// Toggle dark mode and save state to localStorage
darkModeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  document.querySelectorAll(".activity-card").forEach(card => card.classList.toggle("dark-mode"));
  document.querySelectorAll("section, footer, form").forEach(el => el.classList.toggle("dark-mode"));
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
});

// Apply dark mode on page load if previously enabled
if (localStorage.getItem("darkMode") === "enabled") {
  applyDarkMode();
}

// Ensure dynamically added elements respect dark mode
function applyDarkModeToNewElements() {
  if (document.body.classList.contains("dark-mode")) {
    document.querySelectorAll(".activity-card").forEach(card => card.classList.add("dark-mode"));
    document.querySelectorAll("section, footer, form").forEach(el => el.classList.add("dark-mode"));
  }
}
// ...existing code...
