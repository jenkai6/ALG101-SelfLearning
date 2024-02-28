// Project5-2：信用卡號驗證
const { Console, log } = require('console');
var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function cardInfo(cardNumber){
	let cardInfo = {
		number: cardNumber,
		type: '',
		isValid: false
	}
	// Which type?  4:VISA, 5:MASTER_CARD
	cardInfo.type =  Number(cardNumber[0]) === 5? 'MASTER_CARD' : 'VISA';
	// Is the card valid?
	cardInfo.isValid = Number(cardInfo.number[15]) === getChecksum(cardInfo.number);
	cardInfo.type = cardInfo.isValid? cardInfo.type : 'INVALID';
	return cardInfo;
}

function getChecksum(cardNumber){
	// odd sum(i*2) => 1 ~ 15
	let checkSum = 0;
	for(let i = 1; i <= cardNumber.length-1; i+=2){
		let n = Number(cardNumber[i-1]) * 2;
		n = n >= 10 ? n-9 : n;
		checkSum += n;
	}
	// even sum(i) 2 ~ 14
	for(let i = 2; i <= cardNumber.length-2; i+=2){
		checkSum += Number(cardNumber[i-1]);
	}
	checkSum = checkSum % 10 === 0 ? 0 : 10 - checkSum % 10;
	return checkSum;
}

function solve(lines) {
	let cardNumber = lines[0].replace(/-/g,''); // 'g' standing for replace all '-' to ''   return '5412345678901232'
	let info = cardInfo(cardNumber);
	console.log(info.type);
}

solve([
	'5412-3456-7890-1232'
]); 


