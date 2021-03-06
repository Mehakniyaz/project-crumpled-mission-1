/*class Ground{

constructor(x,y,width,height){
    this.x=x;
    this.y=y;
    this.height=height;
    this.width=width;
 
    
    this.ground=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
World .add(world,this.ground);
}
display(){

var posGround= this.ground.position;

push()
			translate(posGround.x, posGround.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,this.width, this.height);
			pop()
}

}*/
class Ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}