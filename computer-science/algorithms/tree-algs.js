const tree = [
	{
		value: 5,
		children: [
			{
				value: 10,
				children: [
					{
						value: 11,
					},
				],
			},
			{
				value: 7,
				children: [
					{
						value: 5,
						children: [
							{
								value: 1,
							},
						],
					},
				],
			},
		],
	},
	{
		value: 5,
		children: [
			{
				value: 10,
			},
			{
				value: 15,
			},
		],
	},
];

function recursiveTraversal(tree) {
  let sum = 0;
  for (let node of tree) {
    sum += node.value;
    if (!node?.children) continue;
    sum += recursiveTraversal(node.children);
  }
  return sum;
}

console.log(recursiveTraversal(tree));

function iterationTraversal(tree) {
  let sum = 0;
  while (tree.length) {
    let node = tree.pop();
    sum += node.value;
    if (node?.children) {
      tree.push(...node.children);
    }
  }
  return sum;
}

console.log(iterationTraversal(tree));