// Check if dark mode was previously enabled
document.addEventListener("DOMContentLoaded", function () {
  const isDark = localStorage.getItem("darkMode") === "true";
  const body = document.body;
  const toggle = document.getElementById("dark-mode-toggle");

  if (isDark) {
    body.classList.add("dark");
    if (toggle) toggle.checked = true;
  }

  if (toggle) {
    toggle.addEventListener("change", function () {
      if (this.checked) {
        body.classList.add("dark");
        localStorage.setItem("darkMode", "true");
      } else {
        body.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }
    });
  }
});
