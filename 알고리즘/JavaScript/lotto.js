function solution(lottos, win_nums) {
  var answer = [];
  let rank = [6, 6, 5, 4, 3, 2, 1];
  let cor_num = lottos.filter((lotto) => win_nums.includes(lotto)).length;
  let count_zero = lottos.filter((lotto) => lotto === 0).length;
  console.log(cor_num, count_zero);

  answer.push(rank[cor_num + count_zero]);
  answer.push(rank[cor_num]);

  return answer;
}
