function separateNumbers(arr) {
  let evens = [];
  let odds = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? evens.push(arr[i]) : odds.push(arr[i]);
  }
  return odds.concat(evens);
}
console.log(separateNumbers([1, 3, 4, 5, 9]));
