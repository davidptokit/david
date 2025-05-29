// Dynamic Year and Date-Time
document.getElementById("year").textContent = new Date().getFullYear();

function updateDateTime() {
  const now = new Date();
  document.getElementById("datetime").textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000);

// Back to Top Button
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}