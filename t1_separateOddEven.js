function my_f(arr) {
  let even = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  return odd.concat(even);
}
console.log(my_f([1, 3, 4, 5, 9]));
