function my_f(num1, num2) {
  let arr = [];
  for (let i = num1; i < num2; i++) {
    if (
      String(i).includes(1) ||
      String(i).includes(3) ||
      String(i).includes(5) ||
      String(i).includes(7) ||
      String(i).includes(9)
    ) {
      continue;
    } else {
      arr.push(i);
    }
  }
  return arr.length !== 0 ? arr : "Such numbers does not exist.";
}
console.log(my_f(19, 42));
