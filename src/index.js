import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  // console.log(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
