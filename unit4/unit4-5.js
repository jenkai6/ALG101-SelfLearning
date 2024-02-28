// Unit4.5：實戰：印出金字塔
/* 
 	Input:
	一個正整數N，1 <= N <= 30
	
	Out:
	N層金字塔的圖形
*/

var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
//   solve(lines)
})

function repeat(str,n){
	let result = '';
	for(let i = 0; i< n; i++){
		result += str;
	}
	return result;
}

function solve(lines) {
    let n = lines[0];
	// n 層做 n 次
	for(let i = 0; i<n; i++){
		let result = '';
		// 空白 i = 2,1,0 => 2,1,0 => i
		result += repeat(' ', (n-1) - i);
		// *    i = 0,1,2 => 1,3,5 => i*2+1
		result += repeat('*', i*2+1);
		console.log(result);
	}
}
solve(['30']); 