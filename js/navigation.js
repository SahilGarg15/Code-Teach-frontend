
// Highlight current nav item
const currentPath = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("text-blue-600", "font-semibold", "underline");
  }
});

// Toggle dark mode
const toggleBtn = document.getElementById("toggleDark");
const root = document.documentElement;

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    root.classList.toggle("dark");
    toggleBtn.textContent = root.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("darkMode", root.classList.contains("dark"));
  });
}

const savedMode = localStorage.getItem("darkMode");
if (savedMode === "true") {
  root.classList.add("dark");
}

// Optional nav hover effect (Tooltips)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.classList.add("scale-105");
  });
  link.addEventListener("mouseleave", () => {
    link.classList.remove("scale-105");
  });
});
