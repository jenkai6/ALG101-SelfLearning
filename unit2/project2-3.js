// Project2-3：列因出數
let num = 128;
let result = [];

for (let i = 0; i < Math.sqrt(num); i++) {
	if (num % i === 0) {
		result.push(i);
		result.push(num / i);
	}
}
console.log(result.sort((a, b) => a - b));

