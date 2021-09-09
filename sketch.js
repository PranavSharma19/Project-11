var path, pathImg;
var runner, runner_run;
var rightWall, leftWall;
function preload(){
  pathImg = loadImage("path.png");
  runner_run = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 20;
  path.scale = 1.2;
  runner = createSprite(200,350,20,20);
  runner.addAnimation("run", runner_run);
  runner.scale = 0.05;
  leftWall = createSprite(20,0,0,800);
  rightWall = createSprite(380,0,0,800);
  leftWall.visible = false;
  rightWall.visible = false;


}

function draw() {
  // background(0);
  if (path.y > 400){
    path.y = height/2;
  }
  runner.x = World.mouseX;
  runner.collide(leftWall);
  runner.collide(rightWall);

  drawSprites();


}
