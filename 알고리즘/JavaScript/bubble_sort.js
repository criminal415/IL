let input = [4, 6, 2, 9, 1, 3, 5];

function bubble_sort(array) {
  let n = array.length;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

console.log(bubble_sort(input));
console.log(input);
