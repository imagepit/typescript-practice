// 演習1-3
// コンソール入力
const input1 = require("prompt-sync")({ sigint : true })
let num1 = parseInt(input1("数値を入力:"));
// 条件分岐
if(num1 % 2 == 0){
    num1 *= 10;
}
console.log(num1);