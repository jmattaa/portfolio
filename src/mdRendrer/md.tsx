import { JSX } from "react";
import lexer, { TokenType } from "./lexer"
import mdToHtml from "./mdtohtml";


export default function Markdown(
    { children }: { children: string }
): JSX.Element[] {
    lexer.lexer(children)

    const jsx: JSX.Element[] = [];

    let currentToken = lexer.next();
    while (currentToken.type !== TokenType.EOF) {
        jsx.push(mdToHtml(currentToken))
        currentToken = lexer.next();
    }

    return jsx
}
