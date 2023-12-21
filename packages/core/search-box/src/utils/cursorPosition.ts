// @ts-nocheck
export const setCursorPosition = (textDiv: HTMLElement|undefined, customPosition: number) => {
  if (!textDiv || !textDiv.childNodes[0]) {
    return
  }
  // select text from a window
  const selection = window.getSelection()

  // create a range
  const selectedRange = document.createRange()
  console.log('zzzz:', textDiv.childNodes[0])
  const contentLen = (textDiv.childNodes[0].innerText || textDiv.childNodes[0].textContent || '').length

  selectedRange.setStart(textDiv.childNodes[0], customPosition > contentLen ? contentLen : customPosition)
  // collapse the range at boundaries
  selectedRange.collapse(true)

  // remove all ranges
  selection?.removeAllRanges()

  // add a new range to the selected text
  selection?.addRange(selectedRange)

  // focus the cursor
  textDiv.focus()
}

export const getCursorPosition = (textDiv: HTMLElement|undefined) => {
  if (!textDiv) {
    return 0
  }
  const selection = window.getSelection()
  if (!selection) {
    return 0
  }
  const range = selection.rangeCount > 0 ? selection?.getRangeAt(0) : null
  if (range) {
    const clonedRange = range?.cloneRange()
    clonedRange?.selectNodeContents(textDiv)
    clonedRange?.setEnd(range.endContainer, range?.endOffset)
    return clonedRange.toString().length
  }
  return 0
}
