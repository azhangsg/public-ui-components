export default class ConsoleErrorListener {
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        throw new Error(`line ${line}:${charPositionInLine} ${msg}`);
    }
}
