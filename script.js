let mainColor = document.getElementById("maincolor");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let btns = [btn1, btn2, btn3, btn4, btn5, btn6];
let shuffledColor = 0;
function hue() {
  let h = Math.round(Math.random() * 360);
  return h;
}
h = hue();
function shuff() {
  let l1 = Math.random() * 360;
  let l2 = Math.random() * 360;
  let l3 = Math.random() * 360;
  let l4 = Math.random() * 360;
  let l5 = Math.random() * 360;
  const colors = [
    {
      ligthnes: h,
    },
    {
      ligthnes: l1,
    },
    {
      ligthnes: l2,
    },
    {
      ligthnes: l3,
    },
    {
      ligthnes: l4,
    },
    {
      ligthnes: l5,
    },
  ];

  shuffledColor = colors.sort(() => Math.random() - 0.5);
  return shuffledColor;
}
function color() {
  let s = 100;
  let l = 50;
  shuffledColor = shuff();
  mainColor.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
  let main = mainColor.style.backgroundColor;
  getColor(main);
  console.log(mainColor.style.backgroundColor);
  btn1.style.backgroundColor = `hsl(${shuffledColor[0].ligthnes}, ${s}%, ${l}%)`;
  btn2.style.backgroundColor = `hsl(${shuffledColor[1].ligthnes}, ${s}%, ${l}%)`;
  btn3.style.backgroundColor = `hsl(${shuffledColor[2].ligthnes}, ${s}%, ${l}%)`;
  btn4.style.backgroundColor = `hsl(${shuffledColor[3].ligthnes}, ${s}%, ${l}%)`;
  btn5.style.backgroundColor = `hsl(${shuffledColor[4].ligthnes}, ${s}%, ${l}%)`;
  btn6.style.backgroundColor = `hsl(${shuffledColor[5].ligthnes}, ${s}%, ${l}%)`;
}
let score = 0;

let reset = document.getElementById("reset");
let scoreResult = document.getElementById("score");

function handleButtonClick(e, main) {
  let clickedBtn = e.target.style.backgroundColor;
  let scoreResult = document.getElementById("score");
  let message = document.getElementById("message");

  if (main === clickedBtn) {
    color();
    h = hue();
    score++;
    scoreResult.innerText = `Score: ${score}`;
    message.innerHTML = `<h2>Correct✅</h2>`;
    message.classList.add("correct");
    setTimeout(() => {
      message.innerHTML = "";
      message.classList.remove("correct");
    }, 2000);
  } else {
    scores();
  }
  console.log(e.target);
  console.log(main);
}

function scores() {
  let result = document.getElementById("result");
  let body = document.getElementById("body");
  btn1.classList.remove("btnP");
  btn1.classList.add("btnDisable");
  btn2.classList.remove("btnP");
  btn2.classList.add("btnDisable");
  btn3.classList.remove("btnP");
  btn3.classList.add("btnDisable");
  btn4.classList.remove("btnP");
  btn4.classList.add("btnDisable");
  btn5.classList.remove("btnP");
  btn5.classList.add("btnDisable");
  btn6.classList.remove("btnP");
  btn6.classList.add("btnDisable");
  body.classList.add("bdy");
  result.classList.remove("result");
  result.classList.add("finalResult");
  result.innerHTML = `<h2>Your score is ${score}</h2>`;
  setTimeout(() => {
    result.innerHTML = "";
    result.classList.remove("finalResult");
    body.classList.remove("bdy");
    btn1.classList.add("btnP");
    btn1.classList.remove("btnDisable");
    btn2.classList.add("btnP");
    btn2.classList.remove("btnDisable");
    btn3.classList.add("btnP");
    btn3.classList.remove("btnDisable");
    btn4.classList.add("btnP");
    btn4.classList.remove("btnDisable");
    btn5.classList.add("btnP");
    btn5.classList.remove("btnDisable");
    btn6.classList.add("btnP");
    btn6.classList.remove("btnDisable");
  }, 5000);
  score = 0;
  scoreResult.innerText = `Score: ${score}`;
  message.innerHTML = `<h2>Wrong❌</h2>`;
  message.classList.add("wrong");
  setTimeout(() => {
    message.innerHTML = "";
    message.classList.remove("wrong");
    color();
  }, 3000);
}

function getColor(main) {
  btns.forEach((btn) => {
    btn.removeEventListener("click", btn.clickHandler);
    btn.clickHandler = (e) => handleButtonClick(e, main);
    btn.addEventListener("click", btn.clickHandler);
  });
}

color();
reset.addEventListener("click", () => {
  color();
  score = 0;
  scoreResult.innerText = `Score: ${score}`;
});
