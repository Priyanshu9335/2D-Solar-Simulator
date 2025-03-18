import { planetsArray } from "./planetsArray";

const solarCanvas = document.getElementById("SolarCanvas");

const ctx = solarCanvas.getContext("2d");

function resizeCanvas () {
    solarCanvas.width = window.innerWidth;
    solarCanvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener(
  "resize", resizeCanvas
);


function updateLoop () {

  ctx.clearRect(0,0, solarCanvas.width, solarCanvas.height);
  planetsArray.forEach((planet) => planet.updatePosition(planetsArray));

  planetsArray.forEach((planet) => planet.draw(ctx, solarCanvas.width, solarCanvas.height));

  requestAnimationFrame(updateLoop);
}

updateLoop();