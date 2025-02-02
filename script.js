let mainColor = document.getElementById("maincolor");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let h = Math.random() * 358;
let s = Math.random() * 100;
let l = Math.random() * 100;
let l1 = Math.random() * 100;
let l2 = Math.random() * 100;
let l3 = Math.random() * 100;
let l4 = Math.random() * 100;
let l5 = Math.random() * 100;

// let hsl = hsl(h, s, l)

function color() {
  mainColor.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
  btn1.style.backgroundColor = `hsl(${h}, ${s}%, ${l1}%)`;
  btn2.style.backgroundColor = `hsl(${h}, ${s}%, ${l2}%)`;
  btn3.style.backgroundColor = `hsl(${h}, ${s}%, ${l3}%)`;
  btn4.style.backgroundColor = `hsl(${h}, ${s}%, ${l4}%)`;
  btn5.style.backgroundColor = `hsl(${h}, ${s}%, ${l5}%)`;
  btn6.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
}
color();

btn1.addEventListener("click", () => {
  color();
});
