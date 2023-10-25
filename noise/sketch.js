let NUM_SAMPLES = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 20, 120);
  noStroke();
}

function draw() {}

function keyReleased() {
  if (key == "r") {
    drawRandom();
  } else if (key == "g") {
    drawGaussian();
  } else if (key == "n") {
    drawNoise();
  } else if (key == " ") {
    background(220, 20, 120);
  }
}

function drawRandom() {
  for (let i = 0; i < NUM_SAMPLES; i++) {
    let x = random(width);
    let y = random(height);
    fill(255);
    ellipse(x, y, 10);
  }
}

function drawGaussian() {
  for (let i = 0; i < NUM_SAMPLES; i++) {
    let x = randomGaussian(width / 2, width / 6);
    let y = randomGaussian(height / 2, height / 6);
    fill(0);
    ellipse(x, y, 10);
  }
}

function drawNoise() {
  fill(random(120, 255), random(120, 255), random(120, 255));

  for (let i = 0; i < NUM_SAMPLES; i++) {
    let x = map(noise(i / 47), 0, 1, 0, width);
    let y = map(noise(i / 51), 0, 1, 0, height);
    ellipse(x, y, 10);
  }
}
