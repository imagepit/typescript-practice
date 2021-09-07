// コンソール入力
const input3 = require("prompt-sync")({ sigint : true })
let num3 = parseInt(input3("数値を入力:"));
// 条件分岐（switch-case）
switch (num3 % 3) {
    case 0:
        console.log("3で割り切れます")
        break;
    case 1:
        console.log("3で割った余りは1です")
        break;
    case 2:
        console.log("3で割った余りは2です")
        break;
    default:
        console.log("不正な入力値")
        break;
}