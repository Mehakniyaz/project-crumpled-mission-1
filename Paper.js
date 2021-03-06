class Paper {
 
    constructor(x,y,dia){
        this.x=x;
        this.y=y;
        this.dia=dia;
        //this.width=width;
        var options={
         isStatic:false,
         restitution:0.3,
         density:1.5,
         friction:0.5
 }
  this.body=Bodies.circle(this.x,this.y,this.dia/2,options) ;
  World.add(world,this.body)
}

display(){

var posPaper=this.body.position;

push()
			translate(posPaper.x, posPaper.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.dia, this.dia);
			pop()




}

}