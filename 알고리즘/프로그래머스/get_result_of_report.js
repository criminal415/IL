function solution(id_list, report, k) {
  const answer = new Array(id_list.length);
  answer.fill(0);
  const report_list = {};

  id_list.map((user) => {
    report_list[user] = [];
  });

  report.map((rep) => {
    const [user_id, report_id] = rep.split(' ');
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
    }
  });
  for (const user_id in report_list) {
    if (report_list[user_id].length >= k) {
      report_list[user_id].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
  return answer;
}

function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(' ');
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}

// 신고 결과 받기 https://programmers.co.kr/learn/courses/30/lessons/92334
