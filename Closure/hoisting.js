function sum(argument) {
	return argument + num;
}

console.log(sum(5)); // NaN
console.log(num); // undefined
num++;
console.log(num); // NaN
console.log(sum(5)); // NaN

var num = 10;