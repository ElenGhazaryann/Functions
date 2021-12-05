function my_f(str, arr) {
  let splited = str.split("").sort().join();
  let anagram = [];

  for (let i = 0; i < arr.length; i++) {
    if (splited === arr[i].split("").sort().join()) {
      anagram.push(arr[i]);
    }
  }
  return anagram;
}

console.log(
  my_f("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"])
);
