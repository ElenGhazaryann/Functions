function my_f(arr) {
  let filtered = [];
  let mult = 1;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      for (let j = 0; j < arr[i].length; j++) {
        filtered = arr[i]
          .filter(function (val) {
            return val < 0;
          })
          .sort((a, b) => a - b);
      }
      if (filtered.length !== 0) {
        mult *= filtered.pop();
      }
    } else {
      return "Invalid argument";
    }
  }

  return mult !== 1 ? mult : "No negatives";
}
console.log(my_f([1, 2]));
