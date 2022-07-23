import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  // inputText変数に取得した文字列を格納しているから消えないよ
  document.getElementById("add-text").value = "";

  // js上でdivタグDOM生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // buttonタグ生成,イベント作成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    alert("testes");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    alert("hashas");
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);
  console.log(div);

  // ulの子要素に上記のdiv要素を追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
