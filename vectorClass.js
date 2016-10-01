function Vector(pointX, pointY){
	this.x = pointX;
	this.y = pointY;
	this.magnitude = Math.sqrt((this.x * this.x) + (this.y * this.y));
	this.add = function(vector){
		var newX = vector.x + this.x;
		var newY = vector.y + this.y;
		return (new Vector(newX, newY));
	};
	this.dot = function(vector){
		var a = this.x * vector.x;
		var b = this.y * vector.y;
		return (a + b);
	};
	this.distance = function(vector){
		var xDist = vector.x - this.x;
		var yDist = vector.y - this.y;
		return (Math.sqrt((xDist * xDist) + (yDist * yDist)));
	
	};
	this.subtract = function(vector){
		var diffX = (this.x - vector.x);
		var diffY = (this.y - vector.y);
		return (new Vector(diffX, diffY));		
		
	};
	this.multiply = function(scaleFactor){
		var diffX = (this.x * scaleFactor);
		var diffY = (this.y * scaleFactor);
		return (new Vector(diffX, diffY));
		
	};
	this.divide = function(scaleFactor){
		var diffX = (this.x/scaleFactor);
		var diffY = (this.y/scaleFactor);
		return (new Vector(diffX, diffY));
		
		
	};
	
	
		
	
};
