// Unit2.7：實戰練習：刪除特定字元
let str = 'kennyyen';
let deleteChar = 'n';
let result = '';

for (let i = 0; i < str.length; i++) {
	if(str[i] === deleteChar)
		continue;
	result += str[i];
}
console.log(result);