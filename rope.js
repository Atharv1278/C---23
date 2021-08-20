class rope{
	constructor(Body1 , Body2 ,pointA , pointB)
	{
		
	//create rope constraint here
	this.pointA = pointA
	this.pointB = pointB

	
	rope1 = new rope(bob1 , roof , - 80 , 0)
	rope2 = new rope(bob2 , roof , - 80 , 0)
	rope3 = new rope(bob3 , roof , - 80 , 0)
	rope4 = new rope(bob4 , roof , - 80 , 0)

	var   A =Matter.Constraint.create({
   pointA:{x:220 , y : 20},
   bodyB:bob1,
   pointB:{x : 0 , y : 0 }, 
  length:5,
   stiffness:0.1,
   
  })

  var   B =Matter.Constraint.create({
	pointA:{x:220 , y : 20},
	bodyB:bob2,
	pointB:{x : 0 , y : 0 }, 
   length:5,
	stiffness:0.1,
	
   })

   var   C =Matter.Constraint.create({
	pointA:{x:220 , y : 20},
	bodyB:bob3,
	pointB:{x : 0 , y : 0 }, 
   length:5,
	stiffness:0.1,
	
   })

   var   D  =Matter.Constraint.create({
	pointA:{x:220 , y : 20},
	bodyB:bob4,
	pointB:{x : 0 , y : 0 }, 
   length:5,
	stiffness:0.1,
	
   })

   var   E  =Matter.Constraint.create({
	pointA:{x:220 , y : 20},
	bodyB:bob5,
	pointB:{x : 0 , y : 0 }, 
   length:5,
	stiffness:0.1,
	
   })
  
  
  
  
 


	

	

	var obtions = {
		BodyA : Body1 ,  
		BodyB  : Body2 ,
		pointB : {x : this . pointA , y : this .pointB}
	
 	}



	}


    //create display() here 
	display() {
		var pointA = this. rope. BodyA . position ; 
		var pointB = this. rope. BodyB . position ; 
		push()
		strokeWeight(2)  
		stroke("Red")
		line(A .pointA.x, A .pointA.y, bob1 .position.x, bob1.position.y)

		strokeWeight(2)  
		stroke("Red")
		line(B .pointA.x, B .pointA.y, bob2 .position.x, bob2.position.y)

		strokeWeight(2)  
		stroke("Red")
		line(C .pointA.x, C .pointA.y, bob3 .position.x, bob3.position.y)

		strokeWeight(2)  
		stroke("Red")
		line(D .pointA.x, D .pointA.y, bob4 .position.x, bob4.position.y)

		strokeWeight(2)  
		stroke("Red")
		line(E .pointA.x, E .pointA.y, bob5  .position.x, bob5.position.y)

		pop()
		
	}

}
