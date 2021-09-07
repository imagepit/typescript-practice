// 演習1-4
// コンソール入力
const input2 = require("prompt-sync")({ sigint : true })
let num2 = parseInt(input2("数値を入力:"));
// 条件分岐
if(num2 < 0){
    console.log("結果: 負の数");
} else if(num2 === 0){
    console.log("結果: 0");
} else {
    console.log("正の数");
}