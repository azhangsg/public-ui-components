export const insertText = (e: any) => {
  e.preventDefault()

  const text = e.clipboardData ? e.clipboardData.getData('text/plain') : ''

  const selection = window.getSelection()
  if (selection) {
    const range = selection.getRangeAt(0)
    range.deleteContents()
    const textNode = document.createTextNode(text)
    range.insertNode(textNode)
    range.selectNodeContents(textNode)
    range.collapse(false)

    selection.removeAllRanges()
    selection.addRange(range)
  }
}
