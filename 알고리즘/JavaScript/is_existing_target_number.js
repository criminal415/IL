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
