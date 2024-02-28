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
    [a,b] = lines[0].split(' '); // ['1','1']
    [c,d] = lines[1].split(' '); // ['2','3']
    [e,f] = lines[2].split(' '); // ['0','0']
    console.log('your ans');
}

// solve([
//     '1 1',
//     '2 3',
//     '0 0'     // a=b=0 means END
// ]); 