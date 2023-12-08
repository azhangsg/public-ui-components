export const setCursorPosition = (textDiv, customPosition) => {

  if (!textDiv.childNodes[0]) {
    return
  }
  // select text from a window
  const selectedText = window.getSelection()

  // create a range
  const selectedRange = document.createRange()

  // set starting position of the cursor in the texts

  selectedRange.setStart(textDiv.childNodes[0], customPosition)

  // collapse the range at boundaries
  selectedRange.collapse(true)

  // remove all ranges
  selectedText.removeAllRanges()

  // add a new range to the selected text
  selectedText.addRange(selectedRange)

  // focus the cursor
  textDiv.focus()
}

export const getCursorPosition = (textDiv) => {
  const selection = window.getSelection()
  const range = selection.getRangeAt(0)
  const clonedRange = range.cloneRange()
  clonedRange.selectNodeContents(textDiv)
  clonedRange.setEnd(range.endContainer, range.endOffset)

  return clonedRange.toString().length

}
