// **　PSEUDO CODE　**

// Unit1.4 印出 1~100 的奇數
for ( i from 1 to 100) do
	if ( i % 2 === 1 )
		print i
	end if 
end for 


// Unit1.5 印出1~n，但如果n是3的倍數印Fizz，n是5的倍數印Buzz，n是15的倍數，印FizzBuzz
for ( i from 1 to n ) do
	if ( i % 15 === 0 ) print( 'FizzBuzz' )
	else if ( i % 3 === 0 ) print( 'Fizz' )
	else if ( i % 5 === 0 ) print( 'Buzz' )
	else print(i)
end for


// Unit1.6 手上的牌找最小值
let min = cards[0]
for ( i from 0 to cards.length-1 )
	if ( cards[i] < min )
		min = cards[i] 
end for


// project1-1 字串反轉 abc -> cba
let reverse = ''
for ( i from str.length - 1 to 0 )
  reverse += str[i]
end for


// project1-2 陣列總和 
let sum = 0
for ( i from 0 to arr.length-1 )
  sum += arr[i]
end for


// project1-3 找最大值
let max = cards[0]
for ( i from 0 to cards.length-1 )
	if ( cards[i] > max )
		max = cards[i] 
end for