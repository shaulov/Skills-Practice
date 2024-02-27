import Lexer from "./lexer";
import Parser from "./parser";

const code = `
  сумма РАВНО 5 УМНОЖИТЬ 9;
  КОНСОЛЬ сумма;
  КОНСОЛЬ 10 ДЕЛИТЬ 2;
`;

const lexer = new Lexer(code);
lexer.lexAnalysis();

const parser = new Parser(lexer.tokenList);

const rootNode = parser.parseCode();

parser.run(rootNode);