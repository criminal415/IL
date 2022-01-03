const input = 'abcba';

function is_palindrome(string) {
  let n = string.length;
  for (let index in string) {
    if (string[index] == string[n - 1 - index]) {
      return true;
    }
  }
  return false;
}

console.log(is_palindrome(input));
