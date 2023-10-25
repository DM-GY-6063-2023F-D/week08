let song;

function preload() {
  song = loadSound("./funny-tango.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(song.duration());
}

function draw() {
  background(220, 20, 120);
}
