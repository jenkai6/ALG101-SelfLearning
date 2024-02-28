// Project5-8：最近點對
var readline = require('readline');

var lines = []
var rl = readline.createInterface({
	input: process.stdin
});

rl.on('line', function (line) {
	lines.push(line)
});

rl.on('close', function () {
	solve(lines)
})

class vec2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

function dist(v1,v2) {
	return Math.sqrt((v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2);
}

function getAllPointFromLines(lines) {
	let points = [];
	for (let i = 0; i < Number(lines[0]); i++) {
		let arr = lines[i + 1].split(' '); // '2 2' => ['2','2']
		points[i] = new vec2(arr[0], arr[1]);
	}
	return points;
}

function getMinDistPoints(points) {
	let minDist = Infinity;
	let ans = null;
	// get min dist
	for (let i = 0; i <= points.length - 2; i++) {		
		for (let j = i + 1; j < points.length; j++) {
			let d = dist(points[i], points[j]);
			if (d < minDist) {
				minDist = d;
				ans = [points[i], points[j]];
			}
		}
	}
	return ans;
}

function sortTwoPoints(p1,p2){
	if( p1.x > p2.x || (p1.x === p2.x && p1.y > p2.y) )
		return [p2,p1];
	return [p1,p2];
}

function solve(lines) {
	let points = getAllPointFromLines(lines);
	let minDistPoints = getMinDistPoints(points); // return array of vec2
	let s_pt = sortTwoPoints(minDistPoints[0],minDistPoints[1]); // sorted point

	console.log(s_pt[0].x, s_pt[0].y);
	console.log(s_pt[1].x, s_pt[1].y);
}

// solve([
// 	'4',
// 	'2 2',
// 	'1 1',
// 	'10 10',
// 	'100 100'
// ]);

// solve([
// 	'4',
// 	'0 0',
// 	'0 -10',
// 	'1 -15',
// 	'-5 -100'
// ]);
