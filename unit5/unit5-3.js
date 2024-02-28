// Unit5.3：實戰：身分證驗證

function getIDCode(char){
	// ASCII code 'A' = 65; 	ID code 'A' = 10;
	return char.charCodeAt()-55;
}

function isValidTWId(id){
	const table = [1,9,8,7,6,5,4,3,2,1,1];
	let letterCode = getIDCode(id[0]).toString();
	let _id = letterCode + id.slice(1); // typeof string
	
	let sum = 0;
	for(let i = 0; i < _id.length; i++){
		sum += Number(_id[i]) * table[i];
	}
	return sum % 10 === 0;
}

const id = 'F130582048';
console.log(isValidTWId(id));


