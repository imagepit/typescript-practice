/**
 * 演習2-2
 */
// オブジェクトリテラルを使った型付け
const obj1 : {
    title : string,
    contents : string,
    progressRate : number
} = {
    title : "TODOタイトル",
    contents : "TODOの内容",
    progressRate : 40
}

// interfaceを使った型付け
interface TodoIF {
    title : string,
    contents : string,
    progressRate : number,
}
const obj2 : TodoIF = {
    title : "TODOタイトル",
    contents : "TODOの内容",
    progressRate : 40
}

// typeを使った型付け
type TodoType = {
    title : string,
    contents : string,
    progressRate : number,
}
const obj3 : TodoType = {
    title : "TODOタイトル",
    contents : "TODOの内容",
    progressRate : 40
}