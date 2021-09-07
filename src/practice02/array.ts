/**
 * 演習2-4
 */
let stations: string[] = [];
while (true) {
    const input = require("prompt-sync")({ sigint : true })
    const stationName = input("駅名を入力:");
    if(stationName === "end"){
        break;
    }
    stations.push(stationName);
    console.log(`駅名リスト:[${stations}]`);
}