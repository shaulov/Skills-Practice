import ExpressionNode from "./expression-node";
import Token from "../token";

export default class NumberNode extends ExpressionNode {
  number: Token;

  constructor(number: Token) {
    super();
    this.number = number;
  }
}