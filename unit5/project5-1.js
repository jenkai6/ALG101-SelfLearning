// Project5-1：判斷等比數列
var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
	let arr = lines[1].split(' ');
	if(isValid(arr)){
		console.log('Yes');
		return;
	}
	console.log('No');
}

function isValid(arr){
	const r = Number(arr[1]) / Number(arr[0]); // ratio
	const epsilon = 1e-5;
	for(let i = 1; i < arr.length-1; i++){
		let n0 = Number(arr[i]);
		let n1 = Number(arr[i+1]);
		if(Math.abs(n1 / n0 - r) >= epsilon)
			return false;
	}
	return true;
}

// solve([
// 	'4',
// 	'3 9 27 81'
// ]); 


