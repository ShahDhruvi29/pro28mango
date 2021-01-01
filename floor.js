class Floor{
    constructor(x,y,width,height){
       this.x=x;
       this.y=y;
       this.width=width;
       this.height=height;
       var floorOptions={
           isStatic:true,
       }
       this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,floorOptions)
       World.add(world,this.body)
    }
    display(){
        rectMode(CENTER);
        strokeWeight(4)
        stroke("green")
        fill("green");
        rect(this.body.position.x, this.body.position.y, width, 20);
    }
}