let mainColor = document.getElementById("maincolor");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let timeLeft = document.getElementById("time");

let btns = [btn1, btn2, btn3, btn4, btn5, btn6];
let shuffledColor = 0;

let timer = 5;
timeLeft.innerHTML = `Time: ${timer}s`;

function timing() {
  // timer = 5;
  const time = setInterval(() => {
    if (timer > 0) {
      timer--;
      timeLeft.innerHTML = `Time: ${timer}s`;
      console.log(timer);
    } else {
      clearInterval(time);
      console.log("time up");
      timeUp();
    }
  }, 1000);
}
// timing();

function hue() {
  let l = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
  return l;
}
l = hue();
function shuff() {
  let l1 = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
  let l2 = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
  let l3 = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
  let l4 = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
  let l5 = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
  const colors = [
    {
      ligthnes: l,
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
  let h = Math.round(Math.random() * 360);
  let s = 50;
  shuffledColor = shuff();
  mainColor.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
  let main = mainColor.style.backgroundColor;
  getColor(main);
  // console.log(mainColor.style.backgroundColor);
  btn1.style.backgroundColor = `hsl(${h}, ${s}%, ${shuffledColor[0].ligthnes}%)`;
  btn2.style.backgroundColor = `hsl(${h}, ${s}%, ${shuffledColor[1].ligthnes}%)`;
  btn3.style.backgroundColor = `hsl(${h}, ${s}%, ${shuffledColor[2].ligthnes}%)`;
  btn4.style.backgroundColor = `hsl(${h}, ${s}%, ${shuffledColor[3].ligthnes}%)`;
  btn5.style.backgroundColor = `hsl(${h}, ${s}%, ${shuffledColor[4].ligthnes}%)`;
  btn6.style.backgroundColor = `hsl(${h}, ${s}%, ${shuffledColor[5].ligthnes}%)`;
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
    timer = 5;
    // timing();
    timeLeft.innerHTML = `Time: ${timer}s`;
    h = hue();
    score++;
    scoreResult.innerText = `Score: ${score}`;
    message.innerHTML = `<h2>Correct✅</h2>`;
    message.classList.add("correct");
    setTimeout(() => {
      message.innerHTML = "";
      // timing();

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
    timer = 5;
    timeLeft.innerHTML = `Time: ${timer}s`;
  }, 5000);
  score = 0;
  // timing();
  scoreResult.innerText = `Score: ${score}`;
  message.innerHTML = `<h2>Wrong❌</h2>`;
  message.classList.add("wrong");
  setTimeout(() => {
    message.innerHTML = "";
    message.classList.remove("wrong");
    color();
  }, 3000);
}

function timeUp() {
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
    timer = 5;
    timing();
    timeLeft.innerHTML = `Time: ${timer}s`;
  }, 5000);
  score = 0;
  timer = 5;
  timeLeft.innerHTML = `Time: ${timer}s`;

  // timing();
  scoreResult.innerText = `Score: ${score}`;
  message.innerHTML = `<h2>Times Up</h2>`;
  message.classList.add("wrong");
  setTimeout(() => {
    message.innerHTML = "";
    message.classList.remove("wrong");
    color();
  }, 4000);
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
  timer = 5;
  // timing();
  timeLeft.innerHTML = `Time: ${timer}s`;
  scoreResult.innerText = `Score: ${score}`;
});
