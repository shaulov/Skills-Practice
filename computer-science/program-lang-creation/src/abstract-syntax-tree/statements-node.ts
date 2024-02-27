import ExpressionNode from './expression-node';

export default class StatementsNode extends ExpressionNode {
	codeStrings: ExpressionNode[] = [];

	addNode(node: ExpressionNode) {
		this.codeStrings.push(node);
	}
}
