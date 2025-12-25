import { JSX } from "react";
import { TokenType, token } from "./lexer";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function mdToHtml(token: token): JSX.Element {
    return md(token)?.[token.type] ?? <>{token.value}</>
}

const md = (token: token): Record<TokenType, JSX.Element> => ({
    [TokenType.H1]: (
        <h1 className="text-3xl font-bold ml-2">
            {token.value}
        </h1>
    ),
    [TokenType.H2]: (
        <h2 className="text-2xl font-bold ml-2">
            {token.value}
        </h2>
    ),
    [TokenType.H3]: (
        <h3 className="text-xl font-bold ml-2">
            {token.value}
        </h3>
    ),
    [TokenType.H4]: (
        <h4 className="text-lg font-bold ml-2">
            {token.value}
        </h4>
    ),
    [TokenType.H5]: (
        <h5 className="text-basic font-bold ml-2 uppercase underline">
            {token.value}
        </h5>
    ),
    [TokenType.H6]: (
        <h6 className="text-basic font-bold ml-2 underline">
            {token.value}
        </h6>
    ),
    [TokenType.Bold]: <strong>{token.value}</strong>,
    [TokenType.Italic]: <em>{token.value}</em>,
    [TokenType.Image]: <img src={token.href} alt={token.value} />,
    [TokenType.ListItem]: <li>{token.value}</li>,
    [TokenType.Code]: (<code className="bg-palette-2/60 px-1 py-0.5 rounded text-palette-1">
        {token.value}
    </code>),
    [TokenType.MultilineCode]: (
        <SyntaxHighlighter language={token.lang} style={gruvboxDark}>
            {token.value}
        </SyntaxHighlighter>
    ),
    [TokenType.Link]: (<a href={token.href} className="text-blue-500 underline">
        {token.value}
    </a>),
    [TokenType.Text]: token.value === "\n" ? <br /> : <>{token.value}</>,

    [TokenType.EOF]: <></>,
});

