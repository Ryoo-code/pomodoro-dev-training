// ブラウザがHTMLを読み込むと、内部的に「Documentオブジェクト」としてメモリ上に構築
// その「HTMLの構造化データ」にアクセスするための入り口がdocument
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("reset");
const resetBtn = document.getElementById("reset");

//必要な変数を考える⇒カウントダウンしたい、タイマー止めたり再開したり、動いてるか判断したり
let timerId;
let timeleft;

//イベントを実際に動かす
startBtn.addEventListener("click", () =>{
    console.log("start");
});
pauseBtn.addEventListener("click", ()=> {
    console.log("pause");
});