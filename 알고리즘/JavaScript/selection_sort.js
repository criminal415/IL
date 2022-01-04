const input = [4, 6, 2, 9, 1];

function selection_sort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    let min_index = i;
    for (let j = 0; j < n - i; j++) {
      if (array[i + j] < array[min_index]) {
        min_index = i + j;
      }
    }
    [array[i], array[min_index]] = [array[min_index], array[i]];
  }
  return;
}
selection_sort(input);
console.log(input);
