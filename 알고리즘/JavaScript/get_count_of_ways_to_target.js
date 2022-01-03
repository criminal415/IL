let numbers = [2, 3, 1];
let target_num = 0;
let result_count = 0;

function get_target(array, target, current_index, current_sum) {
  if (current_index == array.length) {
    if (current_sum == target) {
      result_count += 1;
    }
    return;
  }
  get_target(array, target, current_index + 1, current_sum + array[current_index]);
  get_target(array, target, current_index + 1, current_sum - array[current_index]);
}

get_target(numbers, target_num, 0, 0);
console.log(result_count);
