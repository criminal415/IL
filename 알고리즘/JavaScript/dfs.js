const graph = {
  1: [2, 5, 9],
  2: [1, 3],
  3: [2, 4],
  4: [3],
  5: [1, 6, 8],
  6: [5, 7],
  7: [6],
  8: [5],
  9: [1, 10],
  10: [9],
};

let visited = [];

function dfs_recursion(adjacent_graph, cur_node, visited_array) {
  visited_array.push(cur_node);
  for (adjacent_node in adjacent_graph) {
    if (!visited_array.includes(adjacent_node)) {
      dfs_recursion(adjacent_graph, adjacent_node, visited_array);
    }
  }
  return;
}
function dfs_stack(adjacent_graph, start_node) {
  let stack = [start_node];
  let visited = [];

  while (stack.length) {
    let current_node = stack.pop();

    visited.push(current_node);

    for (adjacent_node of Object.values(adjacent_graph)[current_node - 1]) {
      if (!visited.includes(adjacent_node)) {
        stack.push(adjacent_node);
      }
    }
  }
  return visited;
}

dfs_recursion(graph, '1', visited);
console.log(visited);
console.log(dfs_stack(graph, 1));
