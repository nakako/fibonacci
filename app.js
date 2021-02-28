'use strict';
function fib(n){
    if((n === 0) || (n === 1)){
        return n;
    }
    else{
        return fib(n-1)+fib(n-2);
    }
}

const number = process.argv[2] || 0;　// コンソールから引数を持ってくる
for(let i = 1 ; i <= number ; i++){
    console.log(`${i} のフィボナッチ数　：　${fib(i)}`);
}