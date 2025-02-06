let select = document.getElementById("select");
let start = document.getElementById("start");
let alerts = document.getElementById("alert");

function startGame() {
  if (select.value === "easy") {
    window.location.href = "easy.html";
  } else if (select.value === "medium") {
    window.location.href = "medium.html";
  } else if (select.value === "hard") {
    window.location.href = "hard.html";
  } else {
    error();
  }
}

start.addEventListener("click", () => {
  startGame();
});

function error() {
  alerts.classList.remove("result");
  alerts.classList.add("finalResult");
  select.classList.add("errorSelect");
  alerts.innerHTML = `<h2>Please, select an option`;
  setTimeout(() => {
    alerts.innerHTML = "";
    alerts.classList.remove("finalResult");
  }, 5000);
}
