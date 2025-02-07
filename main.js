let select = document.getElementById("select");
let start = document.getElementById("start");
let alerts = document.getElementById("alert");
const button = document.getElementById("loadBtn");
const spinner = document.getElementById("spinner");
// let progress = 0;
// const progressBar = document.querySelector(".progress-bar");
// const ball = document.querySelector(".ball");
// const loadingText = document.getElementById("loading-text");

// function updateLoader(level) {
//   console.log(level);
//   if (progress < 100) {
//     progress += Math.floor(Math.random() * 10) + 5; // Increase randomly
//     progress = Math.min(progress, 100);

//     progressBar.style.width = progress + "%";
//     ball.style.transform = `translateX(${progress * 3}px)`;
//     loadingText.textContent = `Loading... ${progress}%`;

//     setTimeout(updateLoader(level), 10); // Repeat until 100%
//   } else {
//     // loadingText.textContent = "Completed!";
//     window.location.href = `${level}.html`;
//     ball.style.background = "lime";
//   }
// }

// Start the animation
// setTimeout(updateLoader, 1000);

// 🌟 Setup Three.js Scene
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const renderer = new THREE.WebGLRenderer({ antialias: true });

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // 🟩 Create a 3D Rotating Cube
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({
//   color: 0x00ff00,
//   wireframe: true,
// });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 3;

// // 🎮 Loading Progress Variables
// let progress = 0;
// const loadingText = document.getElementById("loading-text");

// function updateLoader() {
//   if (progress < 100) {
//     progress += Math.floor(Math.random() * 10) + 5;
//     progress = Math.min(progress, 100);

//     // 🟡 Change cube color dynamically
//     cube.material.color.setHSL(progress / 100, 1, 0.5);

//     // 🔄 Rotate Cube
//     cube.rotation.x += 0.05;
//     cube.rotation.y += 0.05;

//     // Update Loading Text
//     loadingText.textContent = `Loading... ${progress}%`;

//     setTimeout(updateLoader, 500);
//   } else {
//     loadingText.textContent = "Ready!";
//     cube.material.color.set(0x00ff00); // Green on completion
//   }
// }

// // 🏆 Animation Loop
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }

// animate();
// setTimeout(updateLoader, 1000);

function startGame() {
  if (select.value === "easy") {
    // updateLoader("easy");
    window.location.href = "easy.html";
  } else if (select.value === "medium") {
    // updateLoader("medium");
    window.location.href = "medium.html";
  } else if (select.value === "hard") {
    // updateLoader("hard");
    window.location.href = "hard.html";
  } else {
    error();
  }
}

start.addEventListener("click", () => {
  start.disabled = true;
  spinner.style.display = "inline-block";
  setTimeout(() => {
    startGame();
    start.disabled = false;
    spinner.style.display = "none";
  }, 2000);
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
