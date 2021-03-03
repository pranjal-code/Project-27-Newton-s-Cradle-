class bob{
	constructor(x,y,radius)
	{
        var options=
        {
			isStatic:false,

			restitution:0.3,
			friction:0.6,
			density:3.5,
        }
        
		//position
		this.x = x;
		this.y = y;
        this.radius = radius;
        
		//type
		this.body=Bodies.circle(this.x, this.y, (this.radius-20)/2, options);

		World.add(world, this.body);

	}
	display()
	{
			
			var pos = this.body.position;		

			push()
			translate(pos.x, pos.y);
            rectMode(CENTER);
           
            
            //strokeStyle = (132, 105, 299)
			strokeWeight(0);
            fill(254, 102, 183);
		
			ellipse(0,0,this.radius, this.radius);
			pop();
			
	}
}
