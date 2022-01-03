const finding_target = 14;
const finding_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function is_existing_target_number(target, array) {
  let find_count = 0;
  for (let num of array) {
    find_count += 1;
    if (num == target) {
      return true;
    }
  }
  return false;
}

console.log(is_existing_target_number(finding_target, finding_numbers));

//binary
function is_existing_target_number_binary(target, array) {
  let cur_index_min = 0;
  let cur_index_max = array.length - 1;
  let cur_index_guess = Math.floor((cur_index_min + cur_index_max) / 2);

  while (cur_index_min <= cur_index_max) {
    if (array[cur_index_guess] == target) {
      return true;
    } else if (array[cur_index_guess] < target) {
      cur_index_min = cur_index_guess + 1;
      cur_index_guess = Math.floor((cur_index_min + cur_index_max) / 2);
    } else {
      cur_index_max = cur_index_guess - 1;
      cur_index_guess = Math.floor((cur_index_min + cur_index_max) / 2);
    }
  }
  return false;
}

console.log(is_existing_target_number_binary(finding_target, finding_numbers));
