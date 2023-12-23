<template>
  <div
    class="search-terms-pretty"
  >
    <div
      ref="presentingContainer"
      class="presenting"
      contenteditable="false"
    >
      <SearchTerm
        v-for="(term, index) in searchTerms"
        :key="term.key"
        :index="index"
        :search-terms="searchTerms"
        :term="term"
      />
    </div>

    <div
      ref="editableInput"
      class="editable"
      contenteditable="true"
      placeholder="Add search criteria..."
      @input="onInput"
      @keydown="onKeyDown"
      @paste="onPaste"
    >
      {{ initialValue }}
    </div>
  </div>
</template>

<script setup lang="ts">
import composables from '../composables'
import { onMounted, watch, ref, nextTick } from 'vue'
import SearchTerm from './SearchTerm.vue'
import { insertText, getCursorPosition, setCursorPosition } from '../utils'

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

const {
  searchTermsString,
  parse,
  parserError,
  searchTerms,
  cursorPosition,
} = composables.useKQueryParser()

const emit = defineEmits(['search-terms-changed', 'search-terms-error', 'start-search'])

const presentingContainer = ref<HTMLElement>()
const editableInput = ref<HTMLElement>()

const onKeyDown = async (e: KeyboardEvent) => {
  const targetEl = (e.target as HTMLElement)
  if (e.code === 'Enter') {
    console.log('keydown:', e)
    await parse(targetEl.innerText, getCursorPosition(targetEl), false)
    emit('start-search')
    e.stopPropagation()
    e.preventDefault()
    return false
  }
}

const onPaste = (e: ClipboardEvent) => {
  insertText(e)
  const targetEl = (e.target as HTMLElement)
  parse(targetEl.innerText, getCursorPosition(targetEl), false)
}
const onInput = (e: Event) => {
  console.log('onInput:', e)
  const targetEl = (e.target as HTMLElement)

  parse(targetEl.innerText, getCursorPosition(targetEl), false)
}

watch(parserError, (newValue) => {
  console.log('errorValue:', newValue)
  emit('search-terms-error', newValue)
})

watch(() => ({ v: searchTermsString.value, p: cursorPosition.value }), async (newValue) => {
  console.log('fire changed based on result of parse:', newValue)
  emit('search-terms-changed', newValue.v, newValue.p)
})

watch(() => ({ v: props.initialValue, p: props.initialCursorPosition }), async (item) => {
  console.log('fire parse based on changed props: ', item)
  await parse(item.v, item.p, false)
  await nextTick()
  setCursorPosition(editableInput.value, props.initialCursorPosition)
})

onMounted(async () => {
  console.log('onMOunted', props.initialValue, props.initialCursorPosition)
  parse(props.initialValue, props.initialCursorPosition, false)
  await nextTick()
  setCursorPosition(editableInput.value, props.initialCursorPosition)
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
  position: relative;
  width: 100%;

  .presenting {
    bottom: 0;
    left: 0;
  position: absolute;
    right: 0;

    top: 0;
    user-select: none;
  }

  .editable {
    caret-color: black;
    color: transparent;
    position: relative;
    white-space: pre;
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
}

</style>
