const input = [0, 3, 5, 6, 1, 2, 4];

function find_max_plus_or_multiply(array) {
  let max = 0;
  for (let num of array) {
    if (num <= 1 || max <= 1) {
      max += num;
    } else {
      max *= num;
    }
  }
  return max;
}

console.log(find_max_plus_or_multiply(input));
