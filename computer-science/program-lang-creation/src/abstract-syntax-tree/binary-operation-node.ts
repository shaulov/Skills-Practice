import ExpressionNode from './expression-node';
import Token from '../token';

export default class BinaryOperationNode extends ExpressionNode {
	operator: Token;
	leftNode: ExpressionNode;
	rightNode: ExpressionNode;

	constructor(
		operator: Token,
		leftNode: ExpressionNode,
		rightNode: ExpressionNode
	) {
		super();
		this.operator = operator;
		this.leftNode = leftNode;
		this.rightNode = rightNode;
	}
}
