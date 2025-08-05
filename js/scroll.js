
// Scroll to Top Button with fade animation
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (scrollTopBtn) {
    if (window.scrollY > 200) {
      scrollTopBtn.classList.remove("opacity-0", "pointer-events-none");
      scrollTopBtn.classList.add("opacity-100");
    } else {
      scrollTopBtn.classList.remove("opacity-100");
      scrollTopBtn.classList.add("opacity-0", "pointer-events-none");
    }
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
