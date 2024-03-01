const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthSearch(graph, start, end) {
  const queue = [start];
  const searched = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    if (!searched.has(current)) {
      if (!graph[current]) {
        graph[current] = [];
      }
      if (graph[current].includes(end)) {
        return true;
      }
      // или блок выше можно переписать так:
      // if (current === end) return true
      queue.push(...graph[current]);
      searched.add(current);
    }
  }

  return false;
}

console.log(breadthSearch(graph, 'a', 'g'));
console.log(breadthSearch(graph, 'a', 'e'));
console.log(breadthSearch(graph, 'a', 'k'));
console.log(breadthSearch(graph, 'a', 'j'));