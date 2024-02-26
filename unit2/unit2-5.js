// Unit2.5：實戰練習：找次大值
let arr = [6,8,150,1,4,7,9,25,11,0]; 
let max = -Infinity; // 代表負無窮，比任何數字都還要小，無論 0, -1 
let secMax = -Infinity;
for (let i = 0; i < arr.length; i++) {
	// i 跟 max 比較
	// 如果 i > max 則 secMax = max , max = i
	if( arr[i] > max ){
		secMax = max;
		max = arr[i];
	}
	// 否則 跟 secMax 比較
	// 如果 i > secMax 則 secMax = i
	else if( arr[i] > secMax )
		secMax = arr[i];
}
console.log('secMax: ',secMax);
