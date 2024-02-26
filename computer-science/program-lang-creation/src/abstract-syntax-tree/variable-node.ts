import ExpressionNode from "./expression-node";
import Token from "../token";

export default class VariableNode extends ExpressionNode {
  variable: Token;

  constructor(variable: Token) {
    super();
    this.variable = variable;
  }
}