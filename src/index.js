import "./styles.css";

const onClickAdd = () => {
  // テキストボックスのあたいを取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);
  // li生成
  const li = document.createElement("li");
  li.innerText = inputText;
  // divタグの子要素に各要素を設定
  div.appendChild(li);
  // 未完成リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
