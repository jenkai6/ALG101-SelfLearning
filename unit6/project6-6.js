// Project6 LIOJ 1041：String trim

function indexOfNotBlank(str){
	for(let i = 0; i < str.length; i++){
		if(str[i] !== ' ')
			return i;
	}
	return -1;
}

function lastIndexOfNotBlank(str){
	for(let i = str.length - 1; i >= 0; i--){
		console.log(i);
		if(str[i] !== ' ')
			return i;
	}
	return -1;
}

function trim(str) {
	first_char_id = indexOfNotBlank(str); // first char id
	last_char_id = lastIndexOfNotBlank(str); // last char id

	console.log(first_char_id,last_char_id);

	// all blanks
	if(first_char_id === -1)
		return '';

	let result = '';
	for(let i = first_char_id; i <= last_char_id; i++){
		result += str[i];
	}
	return result;
}

let str = ' 1 2 3 4444 5555 6 6           7         ';
console.log('start' + trim(str) + 'end');