let mainColor = document.getElementById("maincolor");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let btns = [btn1, btn2, btn3, btn4, btn5, btn6];
let shuffledColor = 0;
let l = Math.round(Math.random() * 100);

function shuff() {
  let l1 = Math.random() * 100;
  let l2 = Math.random() * 100;
  let l3 = Math.random() * 100;
  let l4 = Math.random() * 100;
  let l5 = Math.random() * 100;
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
  let h = Math.random() * 358;
  let s = Math.random() * 100;
  shuffledColor = shuff();
  mainColor.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
  let main = mainColor.style.backgroundColor;
  getColor(main);
  console.log(mainColor.style.backgroundColor);
  btn1.style.backgroundColor = `hsl(${h}, ${s}%, ${shuffledColor[0].ligthnes}%)`;
  btn2.style.backgroundColor = `hsl(${h}, ${s}%, ${shuffledColor[1].ligthnes}%)`;
  btn3.style.backgroundColor = `hsl(${h}, ${s}%, ${shuffledColor[2].ligthnes}%)`;
  btn4.style.backgroundColor = `hsl(${h}, ${s}%, ${shuffledColor[3].ligthnes}%)`;
  btn5.style.backgroundColor = `hsl(${h}, ${s}%, ${shuffledColor[4].ligthnes}%)`;
  btn6.style.backgroundColor = `hsl(${h}, ${s}%, ${shuffledColor[5].ligthnes}%)`;
}
let score = 0;
function getColor(main) {
  btns.forEach((btn, i) => {
    btn.addEventListener(
      "click",
      (e) => {
        let clickeBtn = e.target.style.backgroundColor;
        let scoreResult = document.getElementById("score");
        if (main === clickeBtn) {
          color();
          alert("correct");
          score++;
          scoreResult.innerText = `Score: ${score}`;
        } else {
          alert("wrong");
        }
        console.log(i + 1, e.target);
        console.log(main);
      },
      { once: true },
      { once: false }
    );
  });
}

color();
