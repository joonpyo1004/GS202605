function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  fill(250, 240, 0);
  ellipse(200, 200, 300, 300);
  fill(0, 0, 0);
  ellipse(130, 175, 30, 30);
  ellipse(270, 175, 30, 30);
  strokeWeight(2)
  line(240, 260, 160, 260)
  fill(255, 255, 255)
  arc(200, 260, 80, 80, 0, 180);
}