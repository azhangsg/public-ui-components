<template>
  <span
    :class="`search-term ${term.termType}`"
    :contenteditable="![KQueryTermTypes.clause, KQueryTermTypes.clauseEnd].includes(term.termType)"
    :data-key="term.key"
    @focusout="onFocusOut"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
  >
    {{ term.termValue }}
  </span>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { KQueryTerm } from './../types'
import { getCursorPosition } from '../utils'
import { KQueryTermTypes } from '../enums'

const props = defineProps({
  term: {
    type: Object as PropType<KQueryTerm>,
    required: true,
  },
})

const emit = defineEmits(['focus-next', 'focus-prev', 'start-search', 'update-term'])

const onKeyDown = (e: KeyboardEvent) => {
  if (e.code === 'Enter') {
    console.log('keydown:', e)
    emit('start-search')
    e.stopPropagation()
    e.preventDefault()
    return false
  }

  const targetEl = (e.target as HTMLElement)
  const cursorPos = getCursorPosition(targetEl)
  console.log('searchTerm keyDown:', e, targetEl.getAttribute('data-key'), cursorPos, targetEl.innerText.length)
  if (e.code === 'ArrowRight' && cursorPos === targetEl.innerText.length) {
    e.stopPropagation()
    e.preventDefault()
    emit('focus-next', targetEl.getAttribute('data-key'))
  }
  if (e.code === 'ArrowLeft' && cursorPos === 0) {
    e.stopPropagation()
    e.preventDefault()
    emit('focus-prev', targetEl.getAttribute('data-key'))
  }
}

const onKeyUp = (e: KeyboardEvent) => {
  // const targetEl = (e.target as HTMLElement)
  // const cursorPos = getCursorPosition(targetEl)
  // console.log('searchTerm keyUp:', e, targetEl.getAttribute('data-key'), cursorPos, targetEl.innerText.length)
}

const onFocusOut = (e:FocusEvent) => {
  return
  const targetEl = (e.target as HTMLElement)

  console.log('searchTerm focusOut:', e, `termValue:>${props.term.termValue}< innerText:>${targetEl.innerText}<, innerHtml:>${targetEl.innerHTML}<`)
  if ((props.term.termValue || '') !== targetEl.innerHTML) {
    emit('update-term', targetEl.innerHTML, targetEl.getAttribute('data-key'))
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
}
</style>
