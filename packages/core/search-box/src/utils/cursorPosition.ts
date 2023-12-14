// @ts-nocheck
export const setCursorPosition = (textDiv: HTMLElement|undefined, customPosition: number) => {
  if (!textDiv || !textDiv.childNodes[0]) {
    return
  }
  // select text from a window
  const selection = window.getSelection()

  // create a range
  const selectedRange = document.createRange()

  // set starting position of the cursor in the texts
  let childNode = null
  let posInChild = customPosition
  const getNode = (childNodes) => {
    if (childNode) {
      return
    }
    for (let i = 0; i < childNodes.length; i++) {
      if (childNode) {
        return
      }
      const n = childNodes.item(i)
      if (n.childNodes && n.childNodes.length > 0) {
        getNode(n.childNodes)
        continue
      }
      const content = n.wholeText || n.innerText || ''
      if (posInChild < content.length) {
        childNode = n
        return
      }
      posInChild -= content.length
    }
  }

  getNode(textDiv.children)
  if (!childNode) {
    childNode = textDiv.childNodes[textDiv.childNodes.length - 1]
  }
  const contentLen = (childNode.wholeText || childNode.innerText || '').length
  if (posInChild > contentLen) {
    posInChild = contentLen
  }
  selectedRange.setStart(childNode, posInChild)

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
