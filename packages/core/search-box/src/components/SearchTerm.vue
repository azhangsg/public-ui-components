<template>
  <span
    :class="`search-term ${term.termType} ${isEmpty ? 'empty': ''}`"
    :contenteditable="term.isEditable"
    :data-key="term.key"
    :placeholder="isEmpty ? 'Add search criteria...' : ''"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
    @paste="onPaste"
  >
    {{ term.termValue }}
  </span>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { ref } from 'vue'
import type { KQueryTerm } from './../types'
import { getCursorPosition, insertText } from '../utils'
import { UpdateTermActions, KQueryTermTypes } from '../enums'

const props = defineProps({
  term: {
    type: Object as PropType<KQueryTerm>,
    required: true,
  },
  isEmpty: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['focus-next', 'focus-prev', 'start-search', 'update-term'])

const afterKeyUp = ref<string>(props.term.termValue)

const onKeyDown = (e: KeyboardEvent) => {
  const targetEl = (e.target as HTMLElement)
  if (e.code === 'Enter') {
    console.log('keydown:', e)
    emit('update-term', targetEl.innerText, targetEl.getAttribute('data-key'), UpdateTermActions.startSearch)
    e.stopPropagation()
    e.preventDefault()
    return false
  }

  const cursorPos = getCursorPosition(targetEl)
  console.log('searchTerm keyDown:', e, targetEl.getAttribute('data-key'), `>${targetEl.innerText}<`, cursorPos, targetEl.innerText.length)
  if (e.code === 'ArrowRight' && cursorPos === targetEl.innerText.length) {
    e.stopPropagation()
    e.preventDefault()
    emit('focus-next', targetEl.getAttribute('data-key'))
  }
  if (e.code === 'ArrowLeft' && (cursorPos === 0 || (cursorPos === 1 && props.term.termType === KQueryTermTypes.space))) {
    e.stopPropagation()
    e.preventDefault()
    emit('focus-prev', targetEl.getAttribute('data-key'))
  }

  if (e.code === 'Backspace' && (cursorPos === 0 || (cursorPos === 1 && props.term.termType === KQueryTermTypes.space))) {
    e.stopPropagation()
    e.preventDefault()

    console.log('emitting update-term')
    emit('update-term', targetEl.innerText, targetEl.getAttribute('data-key'), UpdateTermActions.focusPrev)
  }
}

const onPaste = (e: ClipboardEvent) => {
  console.log('onPaste:', e)
  insertText(e)
  const targetEl = (e.target as HTMLElement)

  emit('update-term', targetEl.innerText, targetEl.getAttribute('data-key'), UpdateTermActions.focusNext)
}

const onKeyUp = (e: KeyboardEvent) => {
  console.log('onKeyUp:', e)
  const targetEl = (e.target as HTMLElement)
  if (props.isEmpty) {
    if (targetEl.innerText.trim() !== '') {
      targetEl.classList.remove('empty')
    } else {
      targetEl.classList.add('empty')
    }
  }

  if (['Space', 'Semicolon', 'ArrowRight'].includes(e.code)) {
    e.stopPropagation()
    e.preventDefault()
    emit('update-term', targetEl.innerText, targetEl.getAttribute('data-key'), UpdateTermActions.focusNext)
  }
  if (afterKeyUp.value !== targetEl.innerText) {
    afterKeyUp.value = targetEl.innerText
    emit('update-term', targetEl.innerText, targetEl.getAttribute('data-key'), UpdateTermActions.focusNext)
  }

}

</script>

<style lang="scss" scoped>
.search-term {
  display: inline-block;
  &:after {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0px;
  }

  &:focus {
    border-radius: 0px;
    box-shadow: 0px;
    outline: none;
  }

  &.fieldValue {
    background-color: blue;
    color: white;

  }

  &.fieldName {
    background-color: blue;
    color: white;
  }
  &.colon {
    background-color: blue;
    color: magenta;
  }

  &.or {
    // background-color: white;
    color: magenta;
    // margin:4px;
  }

  &.and {
    // background-color: white;
    color: magenta;
    // margin:4px;
  }

  &.exclusion {
    color: magenta;
  }

  &.grouping {
    color: magenta;
    padding-right: 2px;
  }
  &.grouping-end {
    color: magenta;
    padding-left: 2px;
  }

  &.clause {
    background-color: blue;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    color: white;
    min-width: 6px;
  }

  &.clause-end {
    background-color: blue;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    color: white;
    min-width: 6px;
  }

  &.space {
    padding: 0 4px;
  }
  &.empty:not(:focus):before {
    color: gray;
    content: attr(placeholder);
    font-size: 18px;
    pointer-events: none;
  }

}
</style>
