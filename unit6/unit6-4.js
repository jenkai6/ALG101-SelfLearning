// Unit6.4：實戰：Array.lastIndexOf

function lastIndexOf(arr,element,from){
	for(let i = arr.length-1; i >= 0; i--){
		if(arr[i] === element)
			return i;
	}
	return -1;
}

let arr = ['a','b','b','z','c','c'];
console.log(lastIndexOf(arr,'b'));

