
// Dynamic year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Site visits using localStorage
const visitCountKey = "codeteach-visit-count";
let visitCount = localStorage.getItem(visitCountKey) || 0;
visitCount++;
localStorage.setItem(visitCountKey, visitCount);

const visitElement = document.getElementById("visitCount");
if (visitElement) {
  visitElement.textContent = `Visits from this browser: ${visitCount}`;
}
