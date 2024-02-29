// Project6 LIOJ 1036：Array reverse

function reverse(arr) {
	let result = [];
	for(let i = arr.length-1; i >= 0; i--){
		result.push(arr[i]);
		console.log(i);
	}
	return result;
}

let arr = ['a','b','c','d','e','f'];
console.log(reverse(arr));