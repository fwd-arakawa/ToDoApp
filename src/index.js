import "./styles.css";

/**
 * 追加ボタン押下時の処理を定義　【関数①】
 */
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  // inputText変数に取得した文字列を格納しているから消えないよ
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

/**
 * 　完了・削除ボタン押下時の要素削除関数　【関数２】
 */
// 完了ボタンと削除ボタンで要素を削除するから、共通化して関数でまとめておく
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

/**
 *  未完了リストにdiv以下の要素を追加する関数　【関数３】
 * */
// ★共通化できる部分は関数化して、条件の異なる部分を引数として渡してあげれば良い
const createIncompleteList = (text) => {
  // js上でdivタグDOM生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // buttonタグ生成,イベント作成
  // ①完了ボタン
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    // 完了ボタン押下で未完了リストから追加した要素を削除
    deleteFromIncompleteList(completeBtn.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeBtn.parentNode;

    // todoテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // divの子要素を初期化
    console.log(addTarget.innerHTML);
    addTarget.textContent = null;
    console.log(addTarget);
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // ②戻るボタン生成
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻る";

    backBtn.addEventListener("click", () => {
      // 押下された戻るボタンの親（div）を完了リストから削除
      const deleteTarget = backBtn.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // 未完了リストに戻すよ　－－テキストの取得
      const text = backBtn.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // 初期化したdivの子要素に再び子要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backBtn);

    // 完了リストにdivを追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // ③削除ボタン
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    // ボタン押下で親タグ（div）を未完了リストから削除
    // 関数スコープ問題、再取得
    deleteFromIncompleteList(deleteBtn.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  // ulの子要素に上記のdiv要素を追加
  document.getElementById("incomplete-list").appendChild(div);
};

/**
 * ユーザーのクリックで定義した関数を動作させる
 */
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// // ★自作★要素の移動（ボタンは消しとくよ）
// completeTarget.removeChild(completeBtn);
// completeTarget.removeChild(deleteBtn);
// // 戻るボタンも作っときます。
// const returnBtn = document.createElement("button");
// returnBtn.innerText = "戻る";
// completeTarget.appendChild(returnBtn);
// document.getElementById("complete-list").appendChild(completeTarget);
// console.log(completeTarget);
