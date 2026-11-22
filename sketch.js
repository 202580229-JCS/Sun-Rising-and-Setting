let centerX;              
let horizonY = 320;       
let pathRadius = 250;     
let angle = 0;            
let angleSpeed = 0.01;    
let isPaused = false;     

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('sketch-holder');
  centerX = width / 2;
}

function draw() {

  if (!isPaused) {
    angle = angle + angleSpeed;
  }

  if (angle > PI) {
    angle = 0;
  }

  let sunX = centerX - pathRadius * cos(angle);
  let sunY = horizonY - pathRadius * sin(angle);

  let sunHeight = sin(angle);
  let skyColor = lerpColor(color(255, 130, 60), color(110, 190, 250), sunHeight);
  background(skyColor);

  noStroke();
  fill(255, 220, 60);
  circle(sunX, sunY, 60);

  fill(60, 130, 70);
  rect(0, horizonY, width, height - horizonY);

  fill(255, 255, 255, 210);
  rect(10, 10, 270, 80, 8);
  fill(20);
  textSize(14);
  text('SPACE = pause    UP / DOWN = speed', 20, 32);
  text('angle: ' + degrees(angle).toFixed(1) + ' deg', 20, 54);
  text('x: ' + sunX.toFixed(1) + '   y: ' + sunY.toFixed(1), 20, 76);
}

function keyPressed() {
  if (key === ' ') {
    isPaused = !isPaused;            
  }
  if (keyCode === UP_ARROW) {
    angleSpeed = angleSpeed + 0.005; 
  }
  if (keyCode === DOWN_ARROW) {
    angleSpeed = max(0.002, angleSpeed - 0.005); 
  }
  return false; 
}
