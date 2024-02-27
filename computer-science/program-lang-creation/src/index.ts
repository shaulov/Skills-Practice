import Lexer from "./lexer";
import Parser from "./parser";

const code = `
  сумма РАВНО 5 МИНУС 9;
  суммадва РАВНО 0 МИНУС 6;
  КОНСОЛЬ сумма;
  КОНСОЛЬ суммадва;
  КОНСОЛЬ сумма МИНУС суммадва;
`;

const lexer = new Lexer(code);
lexer.lexAnalysis();

const parser = new Parser(lexer.tokenList);

const rootNode = parser.parseCode();

parser.run(rootNode);