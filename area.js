function getArea(sides) {
	if(sides.constructor === Array && sides.length == 2 && Number.isInteger(sides[0]) && Number.isInteger(sides[1]) && sides[0]>= 0 && sides[1] >= 0){
    	return sides[0] * sides[1];
	}
	return -1
};