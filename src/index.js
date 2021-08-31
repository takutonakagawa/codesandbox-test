import "./styles.css";

const onClickAdd = () => {
  // テキストボックスのあたいを取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // 未完成リストに追加
  document.getElementById("incomplete-list").appendChild(div);

  // 完了ボタンの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 削除ボタンの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
