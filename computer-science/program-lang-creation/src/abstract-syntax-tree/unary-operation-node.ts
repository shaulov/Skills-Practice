import ExpressionNode from './expression-node';
import Token from '../token';

export default class UnaryOperationNode extends ExpressionNode {
	operator: Token;
	operand: ExpressionNode;

	constructor(operator: Token, operand: ExpressionNode) {
		super();
		this.operator = operator;
		this.operand = operand;
	}
}
