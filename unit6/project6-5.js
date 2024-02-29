// Project6 LIOJ 1040：Array join

function join(arr, separator) {
	let result = '';
	for(let i = 0; i < arr.length; i++){
		if(i == arr.length-1){
			result += arr[i];
			break;
		}
		result += arr[i] + separator;
	}
	return result;
}

// let arr = [99, 1, 15, 19, 20, 5, 15];
let arr = ['ken', 'n', 'y', '123', '25', '16', '1'];
console.log(join(arr,''));