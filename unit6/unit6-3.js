// Unit6.3：實戰：String.repeat

function repeat(str,n){
	let result = '';
	for(let i = 0; i < n; i++){
		result += str;
	}
	return result;
}

let str = 'bo';
console.log(repeat('bo',15));

