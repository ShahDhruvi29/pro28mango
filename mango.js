class Fruit{
    constructor(x,y,radius){
      this.x=x;
      this.y=y;
      this.radius=radius;
      var options = {
          isStatic:true,
          restitution:0,
          friction:1
      }
      this.image=loadImage("mango.png")
      this.body=Bodies.circle(this.x,this.y,this.radius,options)
      World.add(world,this.body)
    }
    display(){
        var mangoPos = this.body.position;	

		push();
		translate(mangoPos.x, mangoPos.y);
		rotate(this.body.angle);
		
		fill(255,0,255);
		imageMode(CENTER);
		image(this.image, 0, 0, this.radius * 2, this.radius * 2);
		pop();
    }
}