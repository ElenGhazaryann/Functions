function findAnagrams(str, arr) {
  let splited = str.split("").sort().join();
  let anagrams = [];

  for (let i = 0; i < arr.length; i++) {
    if (splited === arr[i].split("").sort().join()) {
      anagrams.push(arr[i]);
    }
  }
  return anagrams;
}

console.log(
  findAnagrams("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"])
);
