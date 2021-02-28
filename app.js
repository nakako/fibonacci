'use strict';
const memo = new Map();
// n=0, n=1は決まっているのでsetしておく
memo.set(0, 0);
memo.set(1, 1);


function fib(n){
    // memoにデータがあればそれを使う
    if(memo.has(n)){
        return memo.get(n);
    }
    // memoにデータがないので計算する
    else{
        let value = fib(n-1) + fib(n-2);
        memo.set(n, value);
        return value;
    }
}

const number = process.argv[2] || 0;　// コンソールから引数を持ってくる
for(let i = 0 ; i <= number ; i++){
    console.log(`${i} のフィボナッチ数　：　${fib(i)}`);
    console.log(memo);
    console.log('-----------------------------------');
}