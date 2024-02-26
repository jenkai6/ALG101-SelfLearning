// Unit2.6：實戰練習：字串轉大寫
let str = 'keNNy is a studeNt';
let result = [];

function isUpperCase(char){
	return char.charCodeAt(0) < 'a'.charCodeAt();
}

for( let i = 0; i < str.length; i++ ){	
	result[i] = str[i];
	if( str[i] == ' ' )
		continue;
	if( !isUpperCase(str[i]) )
		result[i] = String.fromCharCode(str[i].charCodeAt() - 32);
}
console.log(result.join(''));