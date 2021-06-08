class Drop{

    constructor(x,y){
            var options={
           friction:0.1
        }
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,4,options)
        World.add(world,this.body)
    
    }
    
    update(){
        
       if(this.body.position.y>height){
Matter.Body.setPosition(this.body,{x: random(0,400),y:random(0,400)})
       }
  
 }
    display(){
      push()
      translate(this.body.position.x,this.body.position.y)
      rotate(this.body.angle)
        noStroke()
       fill("blue")
        ellipseMode(RADIUS)
        ellipse(0,0,4)
     pop()  
}

}
