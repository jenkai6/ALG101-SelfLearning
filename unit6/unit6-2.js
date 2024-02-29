// Unit6.2：實戰：Array.map

function map(arr,callback){
	let result = [];
	for(let i = 0; i < arr.length; i++){
		result.push(callback(arr[i]));
	}
	return result;
}

let arr = [0,1,2,3,4,5];
arr = map(arr,x=>x*3);
console.log(arr);

