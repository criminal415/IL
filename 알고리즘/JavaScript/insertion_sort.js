const input = [4, 6, 2, 9, 1];

function insertion_sort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i - j - 1] > array[i - j]) {
        [array[i - j - 1], array[i - j]] = [array[i - j], array[i - j - 1]];
      } else {
        break;
      }
    }
  }
}

insertion_sort(input);
console.log(input);
