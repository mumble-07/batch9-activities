var mode = document.getElementById("moonIcon");

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if (localData == "light") {
  mode.src = "assets/images/moon.png";
  document.body.classList.remove("darkTheme");
} else if (localData == "dark") {
  mode.src = "assets/images/sun.png";
  document.body.classList.add("darkTheme");
}

mode.onclick = function (changeMode) {
  document.body.classList.toggle("darkTheme");
  if (document.body.classList.contains("darkTheme")) {
    mode.src = "assets/images/sun.png";
  } else {
    mode.src = "assets/images/moon.png";
  }
};
