// Project6 LIOJ 1037：Array filter

function filter(arr, callback) {
	let result = [];
	for(let i = 0; i < arr.length; i++){
		if(callback(arr[i]))
			result.push(arr[i]);
	}
	return result;
}

let arr = [0, 1, 15, -19, 20, -5, -15];
console.log(filter(arr,x => x>0));