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

function solve(lines) {
  // 有幾行就要判斷幾次
  for(let i = 0; i < lines.length; i++){
    [a,b] = lines[i].split(' ');
    a = Number(a);  
    b = Number(b);
    if(a === 0 && b === 0)
      return;
    console.log(a >= b ? a : b);
  }
}

// solve([
//     '1 1',
//     '2 3',
//     '0 0'     // a=b=0 means END
// ]); 