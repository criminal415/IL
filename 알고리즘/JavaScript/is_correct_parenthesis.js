const s = '{(())()[]}';

function is_correct_parenthesis(string) {
  let stack = [];
  console.log(string[3]);

  for (let i in string) {
    console.log(string[i]);
    if (string[i] == '(' || string[i] == '{' || string[i] == '[') {
      stack.push(string[i]);
      console.log(stack);
    } else if (string[i] == ')' || string[i] == '}' || string[i] == ']') {
      if (stack.length == 0) {
        return false;
      } else {
        console.log(stack);
        let p = stack.pop();
        console.log(p);
        if ((p == '(' && string[i] == ')') || (p == '{' && string[i] == '}') || (p == '[' && string[i] == ']')) {
          continue;
        } else {
          return false;
        }
      }
    }
  }

  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(is_correct_parenthesis(s));
