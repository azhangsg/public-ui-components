<template>
  <div
    ref="prettyInput"
    class="search-terms-pretty"
    contenteditable="true"
    placeholder="Add search criteria..."
    @click="onClick"
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
import composables from '../composables'
import { onMounted, watch, ref, nextTick } from 'vue'
import SearchTerm from './SearchTerm.vue'
import { setCursorPosition, getCursorPosition } from '../utils'

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

const { searchTermsString, parse, parserError, searchTerms, cursorPosition } = composables.useKQueryParser()

const emit = defineEmits(['search-terms-changed', 'search-terms-error', 'start-search'])

const prettyInput = ref<HTMLElement>()
const additionalInput = ref<HTMLElement>()

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
  startParse(e)
}

const startParse = (e: FocusEvent| KeyboardEvent) => {
  const htmlEl = prettyInput.value as HTMLElement
  const cursorPosition = getCursorPosition(htmlEl)
  console.log('startParse:', e, cursorPosition, htmlEl)
  parse(htmlEl.innerText.replaceAll(String.fromCharCode(160), ' '), cursorPosition)
}

watch(parserError, (newValue) => {
  console.log('!!! errorValue:', newValue)
  emit('search-terms-error', newValue)
})

watch(() => ({ v: searchTermsString.value, p: cursorPosition.value }), (v) => {
  console.log('fire changed based on result of parse')
  if (additionalInput.value) {
    additionalInput.value.innerHTML = '&nbsp;'
  }
  setCursorPosition(prettyInput.value, v.p)
  emit('search-terms-changed', v.v, v.p)
})

watch(() => ({ v: props.initialValue, p: props.initialCursorPosition }), async (item) => {
  console.log('fire parse based on changed props ')
  if (additionalInput.value) {
    additionalInput.value.innerHTML = '&nbsp;'
  }

  parse(item.v, item.p, false)
})

onMounted(async () => {
  if (additionalInput.value) {
    additionalInput.value.innerHTML = '&nbsp;'
  }
  console.log('onMOunted', props.initialValue, props.initialCursorPosition)
  parse(props.initialValue, props.initialCursorPosition, false)
  await nextTick()
  setCursorPosition(prettyInput.value, props.initialCursorPosition)
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
