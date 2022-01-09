//초기 답안 예제 테스트는 통과 했지만, 제출할때 70%통과 이유 확인 필요...
function solution(s) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var answer = s;

  for (let index in numbers) {
    let loc = answer.indexOf(numbers[index]);
    if (loc != -1) {
      answer = answer.slice(0, loc) + index + answer.slice(loc + numbers[index].length, answer.length);
    }
  }

  return parseInt(answer);
}

//바꾼 답안
function solution(s) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var answer = s;

  for (let index in numbers) {
    let loc = answer.indexOf(numbers[index]);
    if (loc != -1) {
      let mid = answer.split(numbers[index]);
      answer = mid.join(index);
    }
  }

  return parseInt(answer);
}
