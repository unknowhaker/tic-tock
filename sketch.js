var h, m, s;
function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
}

function draw() {
  h = hour();
  m = minute();
  s = second();

  sAngle = map(s, 0, 60, 0, 360);
  mAngle = map(m, 0, 60, 0, 360);
  hAngle = map(h % 12, 0, 12, 0, 360);

  translate(400, 200);
  rotate(-90);
  background(155, 255, 255);
  //code for second hand
  push();
  stroke("red");
  rotate(sAngle);
  strokeWeight(3);
  line(0, 0, 100, 0);
  pop()

  push();
  stroke("navy");
  rotate(mAngle);
  strokeWeight(5);
  line(0, 0, 80, 0)
  pop();

  push();
  stroke("green");
  rotate(hAngle);
  strokeWeight(8);
  line(0, 0, 50, 0);
  pop();

noFill();
  stroke(255, 0, 0);
  arc(0, 0, 300, 300, 0, sAngle);

  stroke("navy");
  arc(0, 0, 280, 280, 0, mAngle);

  stroke("green");
  arc(0, 0, 250, 250, 0, hAngle);

  drawSprites();
}