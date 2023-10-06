let pemain1,pemain2
let lapang
let fin
let countdown = 3;
let tiny
let backsound
let karakter1, karakter2

function preload() {
  lapang = loadImage('Balap-Karung.png')
  fin = loadSound('claps.mp3')
  karakter1= loadImage('pic1-1.png')
  karakter2 = loadImage('pic21.png')
  backsound = loadSound('bcksnd.mp3')
}

function setup() {
  sound = 0
  tiny=0;
  createCanvas(850, 500);
  frameRate(30);
  
  pemain1= new Pemain(-30,50,'karakter1')
  pemain2= new Pemain(-30,150,'karakter2')
  
  window.addEventListener('keydown', function (e) {
  if (e.key === 's') {
    startCountdown();
     backsound.loop()
  }
  });
}

function startCountdown(){
  countdown = 3
  tiny = 1
}

function draw() {
  image(lapang,0,0)
  if(tiny === 0){
    push()
    image(lapang,0,0,width,height)
    fill('black')
    textSize(50)
    textAlign(CENTER)
    text('CLICK "S"', 425,300)
    stroke(0,0,0)
    strokeWeight(3)
    pop()
  }
  
  if(tiny == 1){
    push()
    image(lapang,0,0)
    textSize(100)
    text(countdown, width / 2, height / 2);
    stroke(0)
    strokeWeight(5)
    pop()
    
    
    if (frameCount % 60 == 0 && countdown > 0) {
    countdown--;
  }
  }
  
  if (countdown == 0){
    image(lapang,0,0)
    pemain1.tampilkan()
    pemain2.tampilkan()
    pemain1.finish()
    pemain2.finish()
  }
  
}

function keyPressed(){
  if(keyCode === CONTROL) {
    pemain1.maju()
  }
  else if(keyCode === RIGHT_ARROW) {
    pemain2.maju()
  }
}