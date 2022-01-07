const graph = {
  1: [2, 3, 4],
  2: [1, 5],
  3: [1, 6, 7],
  4: [1, 8],
  5: [2, 9],
  6: [3, 10],
  7: [3],
  8: [4],
  9: [5],
  10: [6],
};

function bfs_queue(adj_graph, start_node) {
  let queue = [start_node];
  let visited = [];
  while (queue.length) {
    let current_node = queue.shift();
    visited.push(current_node);
    for (adj_node of Object.values(adj_graph)[current_node - 1]) {
      if (!visited.includes(adj_node)) {
        queue.push(adj_node);
      }
    }
  }
  return visited;
}

console.log(bfs_queue(graph, 1));
