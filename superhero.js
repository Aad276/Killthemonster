class Superhero{
    constructor(x, y,r) {
      var options = {
        frictionAir:1,
          density:1
      }
      this.x=x
      this.y=y
      this.r=r
      this.image=loadImage("images/Superhero-01.png")
      this.body=Bodies.circle(x,y,r/2,options)
    
      
      World.add(world,this.body)
    }
        display(){
        var pos =this.body.position;
        pos.x= mouseX
        pos.y= mouseY
    
     var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
       rotate(angle);
       imageMode(RADIUS)
      
     image(this.image,0, 0, this.r,this.r);
      pop();
  
    
  
    }
  }
    