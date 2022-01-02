const input = [3, 5, 6, 1, 2, 4];

function find_max_num(array) {
  let max_num = array[0];
  for (let num of array) {
    if (max_num < num) {
      max_num = num;
    }
  }
  return max_num;
}

console.log(find_max_num(input));
