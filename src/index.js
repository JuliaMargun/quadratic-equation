module.exports = function solveEquation(equation) {
	var i = 0;
	var positionOfMultiplication = equation.indexOf('*');
	var theSecondPosition = equation.indexOf('*', positionOfMultiplication + 1);
	var positionOfCaret = equation.indexOf('^');
	var a = +(equation.substring(0, positionOfMultiplication - 1));
	var b = +( equation.substring (positionOfCaret + 5, theSecondPosition - 1) );

	if (equation.substr(positionOfCaret + 3, 1) == '-') {
		b = (-1) * b;
	}

	var c = +(equation.substring(theSecondPosition + 6, equation.length));

	if (equation.substr(theSecondPosition + 4, 1) == '-') {
		c = (-1) * c;
	}

    var D = Math.pow(b,2) - 4 * a * c;
	var sqrtOfD = Math.sqrt(D);
	
	if (D > 0) {
		var x1 = Math.round(((-1) * b + sqrtOfD) / (2 * a));
		var x2 = Math.round(((-1) * b - sqrtOfD) / (2 * a));
	} else if (D == 0) {
		x1 = x2 = (-1) * b / (2 * a);
	}

	var result = [];
	result.push(x1);
	result.push(x2);
	result.sort((a,b) => a - b);
	return result;

}
