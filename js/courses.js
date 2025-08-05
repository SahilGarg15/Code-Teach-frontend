
// Alert for upcoming courses
document.querySelectorAll(".upcoming-course").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("🚀 This course is launching soon. Stay tuned!");
  });
});

// Search Filter
const searchInput = document.getElementById("courseSearch");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".course-card");

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? "block" : "none";
    });
  });
}
