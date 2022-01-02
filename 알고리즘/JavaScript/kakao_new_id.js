function solution(new_id) {
  var answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');
  let len = answer.length;

  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
//추가 예시
const solution = (new_id) => {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .padEnd(1, 'a')
    .slice(0, 15)
    .replace(/^\.|\.$/g, '');
  return id.padEnd(3, id[id.length - 1]);
};
