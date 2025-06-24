//1以上の数字
let num = 2;
console.log(num);


//変数(num)が３と５の倍数の場合：”３と5の倍数です”
if (num % 3 === 0 && num % 5 ===0) {
  console.log('3と5の倍数です');
}
//変数(num)が３の倍数の場合：”３の倍数です”
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

//変数(num)が５の倍数の場合：”５の倍数です”
else if (num % 5 ===0) {
  console.log('5の倍数です');
}

else {
  console.log(num);
}