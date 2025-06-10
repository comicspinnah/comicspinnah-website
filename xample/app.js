
function setTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("theme", mode);
}
(function () {
  const savedTheme = localStorage.getItem("theme") || "auto";
  document.documentElement.setAttribute("data-theme", savedTheme);
})();
