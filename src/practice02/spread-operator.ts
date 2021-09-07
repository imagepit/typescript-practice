/**
 * 演習2-3
 */
{
    type TODO = {
        title : string,
        contents : string,
        progressRate : number
    }
    const obj : TODO = {
        title: "TODOタイトル",
        contents : "TODOの内容",
        progressRate : 20
    }
    
    // コンソール入力
    const input = require("prompt-sync")({ sigint : true })
    const title = input("タイトルを入力:");
    const contents = input("内容を入力:");
    const progressRate = parseInt(input("進捗率を入力:"));
    
    // スプレッド構文を使って新しいオブジェクトを作成
    let newObj:TODO; 
    if(title === "" && contents === ""){
        newObj = { ...obj, progressRate: progressRate }
    } else {
        newObj = { ...obj, title: title, contents: contents, progressRate: progressRate }
    }

    console.debug("元のオブジェクト:" + JSON.stringify(obj));
    console.debug("新しいオブジェクト:" + JSON.stringify(newObj));
}
