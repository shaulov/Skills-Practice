const graph = {};
graph.a = {b: 2, c: 1};
graph.b = {f: 7};
graph.c = {d: 5, e: 2};
graph.d = {f: 2};
graph.e = {f: 1};
graph.f = {g: 1};
graph.g = {};

function findShortPath(graph, start) {
  const costs = {};
  const parents = {};
  const processed = [];

  for (let node in graph) {
    if (node !== start) {
      const value = graph[start][node];
      costs[node] = value || Number.MAX_SAFE_INTEGER;
    }
  }

  let node = findLowestCostNode(costs, processed);

  while (node !== null) {
    const cost = costs[node];
    const neighbors = graph[node];

    for (let n in neighbors) {
        const newCost = cost + neighbors[n];
        if (newCost < costs[n]) {
            costs[n] = newCost;
            parents[n] = node;
        }
    }
    processed.push(node);
    node = findLowestCostNode(costs, processed);
  }
  return costs;
}

function findLowestCostNode(costs, processed) {
  let lowestCost = Number.MAX_SAFE_INTEGER;
  let lowestCostNode = null;
  for (let node in costs) {
      let cost = costs[node];
      if (cost < lowestCost && processed.indexOf(node) === -1) {
          lowestCost = cost;
          lowestCostNode = node;
      }
  }
  return lowestCostNode;
}

console.log(findShortPath(graph, 'a'));