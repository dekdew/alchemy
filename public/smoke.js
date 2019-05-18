var canvas, ctx;
const particleCount = 200;
let particles = [];
const cWidth = 800;
const cHeight = 600;
const maxLife = 8000;
const minLife = 5000;

const imagePath = "smoke.png";


var stage;
var canvas;
var bitmap;
var image = new Image();

function rand(min, max) {
  return (Math.floor(Math.random() * (max * 1000 - min * 1000 + 1)) + min * 1000) / 1000;
}

// one particle class
function smokeParticle() {
  this.life = rand(minLife, maxLife);
  // TODO: add origin point randomizer
  this.asset = this.asset || new createjs.Bitmap(image);
  this.origassetWidth = this.asset.image.width;
  this.origassetHeight = this.asset.image.height;
  this.assetWidth = this.asset.image.width;
  this.assetHeight = this.asset.image.height;
  this.originX = canvas.width * .5 - this.assetWidth * 0.5;
  this.originY = canvas.height * .5 - this.assetHeight * 0.5;
  this.asset.x = this.originX;
  this.asset.y = this.originY;
  this.reset = function () {
    this.assetWidth = this.asset.image.width;
    this.assetHeight = this.asset.image.height;
    this.asset.scaleX = rand(0.2, .5);
    this.asset.scaleY = rand(0.2, .5);

    this.originX = canvas.width * .5 - this.origassetWidth * .5 * this.asset.scaleX;
    this.originY = canvas.height * .5 - this.origassetHeight * .5 * this.asset.scaleY;

    this.asset.alpha = rand(0.5, 1);
    this.valpha = rand(0.02, 0.03);
    this.vx = (Math.random() - 0.5) * 20;
    this.vy = (Math.random() - 0.5) * 15;
    this.rotation = (Math.random() - 0.5) * .5;
    this.life = rand(minLife, maxLife);
    this.asset.alpha = rand(0.5, 1);
    this.asset.x = this.originX;
    this.asset.y = this.originY;
  };
}
// (re)set all particle values to start
const trigger = function () {
  particles.map(function (particle) {
    particle.reset();
    stage.addChild(particle.asset);
  });
};
// initial set up for all particles
const build = function () {
  // create all particles
  for (var i = particleCount - 1; i >= 0; i--) {
    let newParticle = new smokeParticle();
    particles.push(newParticle);
  }
  // put all particles on stage
  trigger();
  createjs.Ticker.setFPS(90);
  createjs.Ticker.addEventListener("tick", render);
};
// what happens during a render
const render = function () {
  let part;
  for (var i = particles.length - 1; i >= 0; i--) {
    part = particles[i];
    part.asset.x = part.asset.x + part.vx;
    part.asset.y = part.asset.y + part.vy;
    part.asset.rotation = part.asset.rotation + part.rotation;
    if (part.asset.x > canvas.width || part.x < 0) {
      stage.removeChild(part.asset);
    }
    if (part.asset.y > canvas.height || part.y < 0) {
      stage.removeChild(part.asset);
    }
    part.life--;
    if (part.life <= 0) {
      stage.removeChild(part.asset);
    }
    // part.asset.alpha-=0.042;}
    part.asset.alpha = part.asset.alpha - part.valpha;

  }
  stage.update();
};

// on DOM init
function init() {
  function onImageLoaded() {
    build()
  }
  canvas = document.getElementById('particles');
  stage = new createjs.Stage(canvas);
  canvas.width = cWidth;
  canvas.height = cHeight;
  image = new Image();
  image.name = "smoke";
  image.src = imagePath;
  image.onload = onImageLoaded;
}

document.addEventListener("DOMContentLoaded", function () {
  init();
});
