const input = '011110';

function find_count_to_turn_out_to_all_zero_or_all_one(string) {
  let zero = 0;
  let one = 0;

  if (string[0] == '0') {
    one += 1;
  } else if (string[0] == '1') {
    zero += 1;
  }
  console.log(one, zero);
  for (let index in string) {
    console.log(index + 1);
    if (string[index] != string[parseInt(index) + 1]) {
      if (string[parseInt(index) + 1] == '0') {
        one += 1;
      }
      if (string[parseInt(index) + 1] == '1') {
        zero += 1;
      }
    }
  }
  console.log(one, zero);
  return Math.min(one, zero);
}

console.log(find_count_to_turn_out_to_all_zero_or_all_one(input));
