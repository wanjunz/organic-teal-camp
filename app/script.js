let firesize = 70;
let score = 0
let grow = true;
let human = "🚶";
let cmp
let food 
let fruitX
let fruitY
let fruitOne = false
let v = 0
let timer = 15 

function preload(){
  cmp = loadImage("https://cdn.glitch.com/eac1ac57-0fae-4c5f-b116-7c6fdd50e07a%2FScreenshot%202021-05-15%2011.56.09%20AM.png?v=1621094184561")
  food = loadImage("https://cdn.glitch.com/eac1ac57-0fae-4c5f-b116-7c6fdd50e07a%2FScreenshot_2021-05-15_12.42.45_PM-removebg-preview.png?v=1621097019815")
}

function setup() {
  createCanvas(600, 450);
  fruitX = random(600)
  fruitY = random(450)
}

function draw() {
  background(220);
  image(cmp, 0, -300, 600, 750)
  textSize(16)
  fill('white')
  text("Goal: Get 10 strawberries by the end of the 15 second timer. Avoid the fire.", 20, 400)
  if(frameCount%60 == 0){
    timer = timer - 1
  }
  textSize(20)
  fill(255)
  textStyle(BOLD)
  text(timer,390,25)
  
  //tent
  fill(21, 194, 139)
  triangle(100, 270, 200, 100, 300, 270)
  line(200, 100, 200, 270)
  stroke(138, 110, 76)
  strokeWeight(10)
  line(295, 280, 359, 303)
  line(295,303,359,280)
  
  //fire
  strokeWeight(1)
  stroke(0)
  textSize(30)
  image(food, fruitX,fruitY,30,30)
  textSize(firesize)
  text("🔥", 283, 275)
  if(firesize == 80){
    grow = false
  }
  if(firesize == 60){
    grow = true
  }
  if (grow){
    firesize = firesize + 5
  }else {
    firesize  = firesize - 5
  }
  

  
  //the human
  textSize(100)
  text(human, mouseX, mouseY)
  
  //score
  fruitOne = collideRectRect(mouseX,mouseY-80,100,80,fruitX,fruitY,30,30)
  if(fruitOne){
    score +=1
    fruitX = random(575)
    fruitY = random(425)
  }
  textSize(20)
  textStyle(BOLD)
  fill(255)
  text(score,20,50)
  
  fill(255,255,255,v)
    beginShape()
    vertex(0,0)
    vertex(0,450)
    vertex(600,450)
    vertex(600,0)
    vertex(0,0)
    endShape()
  if(mouseX < 310 && mouseX > 270 && mouseY < 330 && mouseY > 270){
    v=255
    textSize(37)
    fill('black')
    text("YOU LOST, TRY AGAIN!",100,200)
    score = 0
  } 
  if(timer == 0 && score < 10){
    v=255
    textSize(37)
    fill('black')
    text("YOU LOST, TRY AGAIN!",100,200)
    score = 0
  }
  if(score > 15){
    v=255
    textSize(37)
    fill('black')
    text("YOU WIN, GOOD JOB!",100,200)
  }
}