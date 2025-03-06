import { TokenType, token } from "./lexer";

export default function mdToHtml(token: token): JSX.Element {
    if (token.type === TokenType.Text)
        if (token.value === "\n" || token.value === "\r")
            return <br />;

    return md(token)?.[token.type] ?? <span>{token.value}</span>;
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
    [TokenType.Text]: token.value as unknown as JSX.Element, // this be some dumb shi
    [TokenType.Code]: (<code className="bg-black px-1 py-0.5 rounded">
        {token.value}
    </code>),
    [TokenType.MultilineCode]: (<pre className="bg-black px-1 py-0.5 rounded">
        <code>
            {token.value}
        </code>
    </pre>),
    [TokenType.Link]: (<a href={token.href} className="text-blue-500 underline">
        {token.value}
    </a>),

    [TokenType.EOF]: <></>,
});

