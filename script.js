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
  let h = Math.random() * 360;
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
    // score = 0;
    // scoreResult.innerText = `Score: ${score}`;
    message.innerHTML = `<h2>Wrong❌</h2>`;
    message.classList.add("wrong");
    setTimeout(() => {
      message.innerHTML = "";
      message.classList.remove("wrong");
      //   color();
    }, 2000);
  }
  console.log(e.target);
  console.log(main);
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
