
const lexer = {
    md: "",
    i: 0, // current pos in md
    // c: string, // current char (md[i])
    tokens: [] as token[],

    lexer(md: string) {
        lexer.md = md
        lexer.i = 0
    },

    next: (): token => {
        while (lexer.md[lexer.i] !== undefined) {
            switch (lexer.md[lexer.i]) {
                case "#":
                    return lexerAdvanceWith(lexHeader())
                case "[":
                    return lexerAdvanceWith(lexLink())
                case "`":
                    return lexerAdvanceWith(lexCode())
                case "*":
                    return lexerAdvanceWith(lexBoldItalic())
                case "!":
                    return lexerAdvanceWith(lexImage())
                case "-":
                    return lexerAdvanceWith(lexList())
                default:
                    return lexerAdvanceWith({
                        type: TokenType.Text,
                        value: lexer.md[lexer.i]
                    })
            }
        }

        return { type: TokenType.EOF, value: "" }
    }

}

enum TokenType {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Text,
    Link,
    Code,
    MultilineCode,
    Bold,
    Italic,
    Image,
    ListItem,
    EOF,
}

type token = {
    type: TokenType,
    value: string,
    href?: string
}

export {
    lexer as default,
    TokenType,
    type token
}

function lexerAdvanceWith(token: token): token {
    lexer.i++
    return token;
}

function lexHeader(): token {
    let headerLevel = 0

    while (lexer.md[lexer.i] === "#") {
        headerLevel++
        lexer.i++
    }

    if (lexer.md[lexer.i] !== " ") {
        return { type: TokenType.Text, value: "#".repeat(headerLevel) }
    }

    lexer.i++ // skip the " "

    const start = lexer.i
    while (lexer.i < lexer.md.length && lexer.md[lexer.i] !== "\n")
        lexer.i++

    const headerText = lexer.md.slice(start, lexer.i).trim()

    const headerTokenType = headerLevel >= 1 && headerLevel <= 6 ?
        TokenType[`H${headerLevel}` as keyof typeof TokenType] :
        TokenType.Text // this be some fire stuff

    return {
        type: headerTokenType,
        value: headerText
    }
}

function lexLink(): token {
    // expect lexer.md[lexer.i] === "["

    lexer.i++ // skip the "["

    let start = lexer.i
    while (lexer.i < lexer.md.length && lexer.md[lexer.i] !== "]")
        lexer.i++
    const linkText = lexer.md.slice(start, lexer.i).trim()

    lexer.i++ // skip the "]"

    if (lexer.md[lexer.i] !== "(")
        return { type: TokenType.Text, value: linkText }

    lexer.i++ // skip the "("

    start = lexer.i
    while (lexer.i < lexer.md.length && lexer.md[lexer.i] !== ")")
        lexer.i++
    const linkhref = lexer.md.slice(start, lexer.i).trim()

    lexer.i++ // skip the ")"

    return {
        type: TokenType.Link,
        value: linkText,
        href: linkhref
    }
}

function lexCode(): token {
    // expect lexer.md[lexer.i] === "`"
    let backtickCount = 0

    while (lexer.md[lexer.i] === "`") {
        backtickCount++
        lexer.i++
    }

    const start = lexer.i
    if (backtickCount === 1) {
        while (lexer.i < lexer.md.length && lexer.md[lexer.i] !== "`") {
            lexer.i++
        }
    } else if (backtickCount === 3) {
        while (lexer.i < lexer.md.length - 2 &&
            !(lexer.md[lexer.i] === "`" &&
                lexer.md[lexer.i + 1] === "`" &&
                lexer.md[lexer.i + 2] === "`")
        )
            lexer.i++
    } else {
        return { type: TokenType.Text, value: "`".repeat(backtickCount) }
    }

    const codeText = lexer.md.slice(start, lexer.i).trim()
    lexer.i += backtickCount

    return {
        type: backtickCount === 1 ? TokenType.Code : TokenType.MultilineCode,
        value: codeText
    }
}

function lexBoldItalic(): token {
    if (lexer.md[lexer.i] === "*" && lexer.md[lexer.i + 1] === "*") {
        lexer.i += 2 // skip "**"

        const start = lexer.i
        while (lexer.i < lexer.md.length && !(lexer.md[lexer.i] === "*" && lexer.md[lexer.i + 1] === "*"))
            lexer.i++

        const boldText = lexer.md.slice(start, lexer.i)
        lexer.i += 2 // skip "**"

        return { type: TokenType.Bold, value: boldText }
    }
    if (lexer.md[lexer.i] === "*") {
        lexer.i++ // skip "*"
        const start = lexer.i

        while (lexer.i < lexer.md.length && lexer.md[lexer.i] !== "*")
            lexer.i++

        const italicText = lexer.md.slice(start, lexer.i)
        lexer.i++ // skip "*"

        return { type: TokenType.Italic, value: italicText }
    }

    return { type: TokenType.Text, value: lexer.md[lexer.i] }
}

function lexImage(): token {
    // expect lexer.md[lexer.i] === "!"
    lexer.i++ // skip "!"

    if (lexer.md[lexer.i] !== "[") {
        return { type: TokenType.Text, value: "!" }
    }

    lexer.i++ // skip "["
    let start = lexer.i
    while (lexer.i < lexer.md.length && lexer.md[lexer.i] !== "]")
        lexer.i++
    const altText = lexer.md.slice(start, lexer.i).trim()

    lexer.i++ // skip "]"
    if (lexer.md[lexer.i] !== "(")
        return { type: TokenType.Text, value: `![${altText}]` }

    lexer.i++ // skip "("
    start = lexer.i
    while (lexer.i < lexer.md.length && lexer.md[lexer.i] !== ")")
        lexer.i++
    const imgSrc = lexer.md.slice(start, lexer.i).trim()

    lexer.i++ // skip ")"

    return {
        type: TokenType.Image,
        value: altText,
        href: imgSrc
    }
}

function lexList(): token {
    // expect lexer.md[lexer.i] === "-"
    lexer.i++ // skip "-" 

    if (lexer.md[lexer.i] !== " ")
        return { type: TokenType.Text, value: "-" }

    lexer.i++ // skip " "

    const start = lexer.i
    while (lexer.i < lexer.md.length && lexer.md[lexer.i] !== "\n")
        lexer.i++
    const listItemText = lexer.md.slice(start, lexer.i).trim()

    return {
        type: TokenType.ListItem,
        value: listItemText
    }
}
