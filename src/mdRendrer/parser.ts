import lexMarkdown from "./lexer";

// for now this just prints the tokens gotten from the lexer
export default function parseMarkdown(md: string) {
    const tokens = lexMarkdown(md);

    for (const token of tokens)
        console.log(token);
}
