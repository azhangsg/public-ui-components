<template>
  <div
    ref="plainInput"
    class="search-terms-plain"
    contenteditable="true"
    placeholder="Add search criteria..."
    @click="onClick"
    @keydown.stop="onKeyDown"
    @keyup="onKeyUp"
    @paste="onPaste"
  />
</template>

<script setup lang="ts">
import { getCursorPosition, setCursorPosition, insertText } from '../utils'
import composables from '../composables'
import { ref, nextTick, onMounted, watch } from 'vue'

const props = defineProps({
  initialValue: {
    type: String,
    default: '',
  },
  initialCursorPosition: {
    type: Number,
    default: 0,
  },
})

const { parse, parserError, searchTermsString, cursorPosition } = composables.useKQueryParser()

const emit = defineEmits(['search-terms-changed', 'search-terms-error', 'start-search'])

const plainInput = ref<HTMLElement>()

const onKeyDown = (e: KeyboardEvent) => {
  if (e.code === 'Enter') {
    emit('start-search')

    e.stopPropagation()
    e.preventDefault()
    return false
  }
}

const onClick = (e: FocusEvent) => {
  startParse(e)
}

const onKeyUp = (e: KeyboardEvent) => {
  // if (e.code === 'Enter') {
  //   emit('start-search')
  //   return
  // }
  startParse(e)
}

const onPaste = (e: ClipboardEvent) => {
  console.log('onPaste:', e)
  insertText(e)
}

const startParse = async (e: FocusEvent | KeyboardEvent) => {
  const htmlEl = e.target as HTMLElement
  const cursorPosition = getCursorPosition(htmlEl)
  console.log('startParse:', e, cursorPosition, htmlEl)
  parse(htmlEl.innerText.replaceAll(String.fromCharCode(160), ' '), cursorPosition)
}

const setFieldValue = async (newStringValue: string, newCursorPosition: number) => {

  console.log('suggestion:', newStringValue, newCursorPosition)
  const cursorPosition = getCursorPosition(plainInput.value)
  console.log('current cursorPosition:', cursorPosition)

  if (!plainInput.value || plainInput.value.innerText === newStringValue) {
    return
  }
  plainInput.value.innerText = newStringValue
  await nextTick()
  setCursorPosition(plainInput.value, newCursorPosition)
  plainInput.value?.focus()
}

watch(parserError, (newValue) => {
  console.log('!!! errorValue:', newValue)
  emit('search-terms-error', newValue)
})

watch(() => ({ v: searchTermsString.value, p: cursorPosition.value }), (v) => {
  console.log('fire changed based on result of parse')
  emit('search-terms-changed', v.v, v.p)
})

watch(() => ({ v: props.initialValue, p: props.initialCursorPosition }), async (item) => {
  console.log('fire parse based on changed props ')
  parse(item.v, item.p, false)
  setFieldValue(item.v, item.p)
})

onMounted(() => {
  console.log('onMOunted', props.initialValue)
  parse(props.initialValue, props.initialCursorPosition, false)
  setFieldValue(props.initialValue, props.initialCursorPosition)
})
</script>

<style lang="scss" scoped>
.search-terms-plain {
  align-items: center;
  border: 0px;
  display: inline-block;
  font-size: 18px;

  padding-left: 4px;
  padding-right: 4px;
  width:100%;
  &:focus {
    border-radius: 0px;
    box-shadow: 0px;
    outline: none;
  }
  &:empty:not(:focus):before {
    color: gray;
    content: attr(placeholder);
    font-size: 18px;
    pointer-events: none;
  }
}

</style>
