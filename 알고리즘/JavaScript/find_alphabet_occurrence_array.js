function find_alphabet_occurrence_array(string) {
  alphabet_occurrence_array = new Array(26).fill(0);

  for (char of string) {
    if (!isAlpha(char)) {
      continue;
    }
    arr_index = char.charCodeAt() - 'a'.charCodeAt();
    alphabet_occurrence_array[arr_index] += 1;
  }
  return alphabet_occurrence_array;
}

function isAlpha(str) {
  let pattern = /^[a-zA-Z]+$/;
  return pattern.test(str) ? true : false;
}

console.log(find_alphabet_occurrence_array('hello my name is sparta'));

function find_max_occurred_alphabet(string) {
  alphabet_occurrence_array = new Array(26).fill(0);

  for (let char of string) {
    if (!isAlpha(char)) {
      continue;
    }
    arr_index = char.charCodeAt() - 'a'.charCodeAt();
    alphabet_occurrence_array[arr_index] += 1;
  }

  max_occurrence = 0;
  max_alphabet_index = 0;
  for (index in alphabet_occurrence_array) {
    if (alphabet_occurrence_array[index] > max_occurrence) {
      max_occurrence = alphabet_occurrence_array[index];
      max_occurrence_index = index;
    }
  }
  return String.fromCharCode(max_alphabet_index + 'a'.charCodeAt());
}

console.log(find_max_occurred_alphabet('hello my name is sparta'));
