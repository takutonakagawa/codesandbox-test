import "./styles.css";

const nameArr = ["ハルヒ", "ひたぎ", "タクト"];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// };

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "タクト") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

// 三項演算子
const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 30));
