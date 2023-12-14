<template>
  <div
    ref="prettyInput"
    class="search-terms-pretty"
    contenteditable="true"
    placeholder="Add search criteria..."
    @click.stop="onClick"
    @keydown.stop="onKeyDown"
    @keyup.stop="onKeyUp"
  >
    <SearchTerm
      v-for="term in searchTerms"
      :key="term.key"
      :term="term"
    />
    <span
      ref="additionalInput"
    >&nbsp;</span>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import { onMounted, watch, ref, nextTick } from 'vue'
import SearchTerm from './SearchTerm.vue'
import type { KQueryTerm } from './../types'
import { setCursorPosition, getCursorPosition } from '../utils'

const props = defineProps({
  suggestion: {
    type: Object,
    default: null,
  },
  searchTerms: {
    type: Object as PropType<Array<KQueryTerm>>,
    required: true,
  },
  cursorPosition: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['search-terms-changed'])

const prettyInput = ref<HTMLElement>()
const additionalInput = ref<HTMLElement>()

const onKeyDown = (e: KeyboardEvent) => {
  if (e.code === 'Enter') {
    e.stopPropagation()
    e.preventDefault()
    return false
  }
}

const onClick = (e: FocusEvent) => {
  fireChangedEvent(e)
}

const onKeyUp = (e: KeyboardEvent) => {
  if (e.code === 'Space') {
    return
  }
  fireChangedEvent(e)
}

const fireChangedEvent = (e: FocusEvent| KeyboardEvent) => {
  const htmlEl = e.target as HTMLElement
  const cursorPosition = getCursorPosition(htmlEl)
  console.log('fireChangedEvent:', e, cursorPosition, htmlEl)
  emit('search-terms-changed', htmlEl.innerText.replaceAll(String.fromCharCode(160), ' '), cursorPosition)
}

watch(() => ({ terms: props.searchTerms, pos: props.cursorPosition }), async (v) => {
  console.log('watch searchTerms:', v)
  if (additionalInput.value) {
    additionalInput.value.innerHTML = '&nbsp;'
  }
  await nextTick()
  setCursorPosition(prettyInput.value, v.pos)
})

onMounted(async () => {
//  setFieldValue(props.suggestion)
  if (additionalInput.value) {
    additionalInput.value.innerHTML = '&nbsp;'
  }
  console.log('onMOunted', props.searchTerms, props.cursorPosition)
  await nextTick()
  setCursorPosition(prettyInput.value, props.cursorPosition)
  // prettyInput.value?.focus()
})
</script>

<style lang="scss" scoped>
.search-terms-pretty {
  align-items: center;
  border: 0px;
  display: inline-block;
  font-size: 18px;

  padding-left: 4px;
  padding-right: 4px;
  width: 100%;

  &:focus {
    border-radius: 0px;
    box-shadow: 0px;
    outline: none;
  }
  .before-empty {
    width:4px;
  }
}
</style>
