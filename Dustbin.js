class Dustbin{

constructor(x,y){
    this.x=x;
    this.y=y;
    this.width=200;
    this.height=100;
    this.wallThickness=20;
    this.angle=0;


    
    this.base=Bodies.rectangle(this.x,this.y,this.width,this.wallThickness,{isStatic:true});
    this.leftSide=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.wallThickness, this.height, {isStatic:true})
    this.rightSide=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.wallThickness, this.height, {isStatic:true})

	

   Matter.Body.setAngle(this.leftSide, this.angle);
   Matter.Body.setAngle(this.rightSide, -1*this.angle);

World .add(world,this.base);
World.add(world,this.leftSide);
World.add(world,this.rightSide);

}
//------------------------------------------
/*this.boxPosition=x ;//width/2-100
 this.boxY=y  //610;


	this.box1_bottom=Bodies.rectangle(this.boxPosition+100,this. boxY+45-20, 200,20 , {isStatic:true} );
	this.box2_leftside=Bodies.rectangle(this.boxPosition+20, this.boxY, 20,100 , {isStatic:true});
	this.box3_rightside=Bodies.rectangle(this.boxPosition+200-20 ,this. boxY, 20,100 , {isStatic:true});

	
	

}*/

display(){

    var posBase = this.base.position;
    var posLeft = this.leftSide.position;
    var posRight= this.rightSide.position;


    push()
    translate(posLeft.x, posLeft.y);
    rectMode(CENTER)
    //strokeWeight(4);
    angleMode(RADIANS)
    fill(255)
    stroke(255)
    rotate(this.angle)
    rect(0,0,this.wallThickness, this.height);
    pop()

    push()
    translate(posRight.x, posRight.y);
    rectMode(CENTER)
    //strokeWeight(4);
    stroke(255)
    angleMode(RADIANS)
    fill(255)
    rotate(-1*this.angle)
    rect(0,0,this.wallThickness, this.height);
    pop()

    push()
    translate(posBase.x, posBase.y);
    rectMode(CENTER)
    //strokeWeight(4);
    stroke(255)
    angleMode(RADIANS)
    fill(255)
    rect(0,0,this.width, this.wallThickness);
    pop()

    //rectMode(CENTER);
   // var box1= createSprite(this.boxPosition+100,this. boxY+40, 200,20)
    //  box1.shapeColor="red";

	  //var box2= createSprite(this.boxPosition+200 , this.boxY, 20,100);
    //  box2.shapeColor="red";

	  //var box3= createSprite(this.boxPosition, this.boxY, 20,100)
    //  box3.shapeColor="red";  

}

}

