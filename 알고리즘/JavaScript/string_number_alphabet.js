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
//이유 초기 답안은 만약에, 숫자 문자열이 두개 이상이 포함되어있을때 제일 먼저 나오는것만 탐색하기 때문에 실패!!!

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
