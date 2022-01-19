function findLargerNumbers(arr, num) {
  let filtered = arr.filter((val) => val > num);

  return filtered.length !== 0 ? filtered : "Such values do not exist.";
}
console.log(findLargerNumbers([1, 1, 2, -3, 0, 8, 4, 0], 9));
