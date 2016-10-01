function collision(circleOne, circleTwo){
	var normal = new Vector ((circleTwo.x - circleOne.x), (circleTwo.y -     	circleOne.y));
	var d = normal.magnitude;
	if(d == 0){
		d = 1;
	}
	var transdist = normal.multiply(((circleOne.r + circleTwo.r)-d)/d);
	var circleVector1 = new Vector(circleOne.x, circleOne.y);
	var circleVector2 = new Vector(circleTwo.x, circleTwo.y);
	circleVector1 = circleVector1.subtract(transdist.multiply(0.5));
	circleVector2 = circleVector2.add(transdist.multiply(0.5));
	circleOne.x = circleVector1.x;
	circleOne.y = circleVector1.y;
	circleTwo.x = circleVector2.x;
	circleTwo.y = circleVector2.y;
	
	var newNormal = normal.divide(normal.magnitude);
	var a = new Vector (circleOne.dx, circleOne.dy);
	var b = new Vector(circleTwo.dx, circleTwo.dy);
	var aInit= a.dot(newNormal);	
	var bInit= b.dot(newNormal);	
	var aFin = bInit;
	var bFin = aInit;
	a = a.add(newNormal.multiply(aFin- aInit));
	b = b.add(newNormal.multiply(bFin- bInit));
	circleOne.dx = a.x;
	circleOne.dy = a.y;
	circleTwo.dx = b.x;
	circleTwo.dy = b.y;
}
