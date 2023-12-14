// @ts-nocheck
export const setCursorPosition = (textDiv: HTMLElement|undefined, customPosition: number) => {
  console.log('setCursorPosition:', customPosition)
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
    console.log('starting for: ', childNodes)
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
      console.log(`n:>${content}<`, 'pos:' + posInChild, n)
      if (posInChild < content.length) {
        console.log('detected: ', n)
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
  console.log('!!!!!!! childNode:', childNode, posInChild, textDiv.childNodes)
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
  console.log('selection:', selection)
  const range = selection.rangeCount > 0 ? selection?.getRangeAt(0) : null
  if (range) {
    console.log('range:', range)
    const clonedRange = range?.cloneRange()
    clonedRange?.selectNodeContents(textDiv)
    console.log('clonedRange:', clonedRange)
    clonedRange?.setEnd(range.endContainer, range?.endOffset)
    console.log('clonedRange.toString:', clonedRange.toString())
    return clonedRange.toString().length
  }
  return 0
}
