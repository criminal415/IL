const input = 'adacababecde';

function find_not_repeating_character(string) {
  let char_occurrence_array = new Array(26).fill(0);

  for (let char of string) {
    if (!isAlpha(char)) {
      continue;
    }
    char_index = char.charCodeAt() - 'a'.charCodeAt();
    char_occurrence_array[char_index] += 1;
  }
  console.log(char_occurrence_array);
  let not_repeating_character_array = [];
  for (let index in char_occurrence_array) {
    if (char_occurrence_array[index] == 1) {
      not_repeating_character_array.push(String.fromCharCode('a'.charCodeAt() + parseInt(index)));
    }
  }
  for (let text of string) {
    if (not_repeating_character_array.includes(text)) {
      return text;
    }
  }

  return 'none';
}

function isAlpha(str) {
  let pattern = /^[a-zA-Z]+$/;
  return pattern.test(str) ? true : false;
}

console.log(find_not_repeating_character(input));
