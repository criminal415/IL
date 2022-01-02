const input = [3, 5, 6, 1, 2, 4];

function is_number_exist(number, array) {
  for (let element of array) {
    if (element == number) {
      return true;
    }
  }
  return false;
}

console.log(is_number_exist(3, input));
