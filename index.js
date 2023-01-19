button = document.querySelector(".theme-toggle");

function getCurrentTheme() {
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  localStorage.getItem("site.theme")
    ? (theme = localStorage.getItem("site.theme"))
    : null;
  return theme;
}

function loadTheme(theme) {
  const root = document.querySelector(":root");
  if (theme === "light") {
    button.className = "theme-toggle";
  } else {
    button.className = "theme-toggle theme-toggle--toggled";
  }
  root.setAttribute("color-scheme", `${theme}`);
}

button.addEventListener("click", () => {
  let theme = getCurrentTheme();
  if (theme === "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }
  localStorage.setItem("site.theme", `${theme}`);
  loadTheme(theme);
  console.log(theme);
});

window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentTheme());
});
