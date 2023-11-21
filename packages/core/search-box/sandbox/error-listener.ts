export default class ConsoleErrorListener {
  public syntaxError<T>(
    recognizer: any,
    offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: any): void {
    throw new Error(`line ${line}:${charPositionInLine} ${msg}`)
  }
}
