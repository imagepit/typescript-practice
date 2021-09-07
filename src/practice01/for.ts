// 演習1-6
const arr = ['a','b','c'];
console.log("カウンタ変数を使った繰り返し")
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log("for-ofを使った繰り返し")
for (const i of arr) {
    console.log(i);
}
console.log("forEachを使った繰り返し")
arr.forEach(e => console.log(e));