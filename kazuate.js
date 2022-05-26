// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log ='答え: ' + kotae;      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
// ボタンを押した後の処理をする関数 hantei() の定義
let q = document.querySelector('#print');
    q.addEventListener('click', hantei);
function hantei() {
    // 第5回課題:テキストボックスの数値をここに代入
    
    
    let i = document.querySelector('input[name="suuzi"]');
    let suuzi = i.value;
    let yoso = Math.floor(suuzi);
    kaisu=kaisu+1;
    let a = document.querySelector('span#kaisu');
    a.textContent = kaisu;
    let b = document.querySelector('span#yoso');
    b.textContent = yoso;
    let p=document.querySelector('p#result');
    if(kaisu<4){
        if(kaisu===3){
            if(kotae!==yoso){
                p.textContent ='まちがい。残念でした答えは '+kotae+' です。';
            }
        }
        else if(kotae > yoso){
            p.textContent ='まちがい。答えはもっと大きいですよ';
        }
        else if(kotae < yoso){
            p.textContent ='まちがい。答えはもっと小さいですよ';
        }
        else{
            p.textContent ='正解です。おめでとう!';
        }
    }
    else{
        p.textContent='答えは '+kotae+' でした。すでにゲームは終わっています';
    }
    
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    
}