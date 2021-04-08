class Roof{
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
			
			var roofPos=this.body.position;		

			push()
			translate(roofPos.x, roofPos.y);
			rectMode(CENTER)
			stroke(115, 65, 125);
			fill(225, 195, 230);
			rect(0,0,this.w, this.h);
			pop()
			
	}

}