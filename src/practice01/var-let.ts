// 演習1-1
var val1 = "グローバル変数val1";
let val2 = "グローバル変数val2";
{
    var val1 = "ローカル変数val1";
    let val2 = "ローカル変数val2";
}
console.log(val1);
console.log(val2)