class Pemain {
  constructor(x,y,karakter){
    this.x=x
    this.y=y
    this.loncat=10
    this.karakter=karakter
    this.warna=color(255)
  }
  
  tampilkan(){
    if (this.karakter==='karakter1') image(karakter1,this.x,this.y,200,220)
    else image(karakter2,this.x,this.y,200,300)
  }
  
  maju(){
    this.x += this.loncat
  }
  
  finish(){
    if(this.x > 750){
      push()
      fill(this.warna)
      stroke(0)
      strokeWeight(10)
      textSize(100)
      text('FINISH', 270,300)
      pop()
      fin.play()
      noLoop()
      backsound.stop()
    }
  }
  

}