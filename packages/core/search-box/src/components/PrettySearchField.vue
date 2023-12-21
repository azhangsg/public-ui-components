<template>
  <div
    ref="prettyInput"
    class="search-terms-pretty"
    contenteditable="false"
    @click="onClick"
  >
    <SearchTerm
      v-for="term in searchTerms"
      :key="term.key"
      :is-empty="searchTerms.length === 1 && searchTerms[0].termType === KQueryTermTypes.space"
      :term="term"
      @focus-next="onFocusNext"
      @focus-prev="onFocusPrev"
      @sZtart-search="onStartSearch"
      @update-term="onUpdateTerm"
    />
  </div>
</template>

<script setup lang="ts">
import composables from '../composables'
import { onMounted, watch, ref, nextTick } from 'vue'
import SearchTerm from './SearchTerm.vue'
import { setCursorPosition } from '../utils'
import { KQueryTermTypes } from '../enums'

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

const { searchTermsString, parse, parserError, searchTerms, cursorPosition, updateTerm, getActiveTerm } = composables.useKQueryParser()

const emit = defineEmits(['search-terms-changed', 'search-terms-error', 'start-search'])

const prettyInput = ref<HTMLElement>()

const setCursorForActiveTerm = (termKey: string, cursorPos: number = -1) => {
  const activeEl = prettyInput.value?.querySelector(`[data-key="${termKey}"]`) as HTMLElement
  console.log('activeEl:', activeEl)
  if (!activeEl) {
    return
  }
  setCursorPosition(activeEl, cursorPos === -1 ? activeEl.innerText.length : cursorPos)

}
const onFocusNext = (dataKey: string) => {
  const currentIdx = searchTerms.value.findIndex(t => t.key === dataKey)
  console.log('onFocusNext:', dataKey, currentIdx)
  if (currentIdx === -1 || currentIdx === searchTerms.value.length - 1) {
    return
  }
  let nextEditableKey = ''
  for (let j = currentIdx + 1; j < searchTerms.value.length; j++) {
    if (searchTerms.value[j].isEditable && searchTerms.value[j].termValue !== '') {
      nextEditableKey = searchTerms.value[j].key
      break
    }
  }
  setCursorForActiveTerm(nextEditableKey, 0)
}

const onFocusPrev = (dataKey: string) => {
  const currentIdx = searchTerms.value.findIndex(t => t.key === dataKey)
  console.log('onFocusPrev:', dataKey, currentIdx)
  if (currentIdx < 1 || currentIdx === searchTerms.value.length) {
    return
  }

  let prevEditableKey = ''
  for (let j = currentIdx - 1; j >= 0; j--) {
    if (searchTerms.value[j].isEditable && searchTerms.value[j].termValue !== '') {
      prevEditableKey = searchTerms.value[j].key
      break
    }
  }
  setCursorForActiveTerm(prevEditableKey, -1)
}

const onClick = (e: MouseEvent) => {
  console.log('onClick:', e)
  if ((e.target as HTMLElement).className === 'search-terms-pretty') {
    setCursorForActiveTerm(searchTerms.value[searchTerms.value.length - 1].key, 0)
  }
}

const onStartSearch = () => {
  console.log('onStartSearch:')
  emit('start-search')
}

const onUpdateTerm = async (newValue: string, key: string) => {
  console.log('onUpdateTerm:', newValue, key)
  await updateTerm(newValue, key)
}

watch(parserError, (newValue) => {
  console.log('!!! errorValue:', newValue)
  emit('search-terms-error', newValue)
})

watch(() => ({ v: searchTermsString.value, p: cursorPosition.value }), async (newValue, oldValue) => {
  console.log('fire changed based on result of parse:', newValue)
  if (newValue.v !== oldValue.v) {
    await nextTick()
    const activeTerm = getActiveTerm(cursorPosition.value)
    console.log('activeTerm:', activeTerm)
    if (activeTerm.activeKey) {
      setCursorForActiveTerm(activeTerm.activeKey, activeTerm.cursorPosInTerm)
    }
  }

  emit('search-terms-changed', newValue.v, newValue.p)
})

watch(() => ({ v: props.initialValue, p: props.initialCursorPosition }), async (item) => {
  console.log('fire parse based on changed props ')
  await parse(item.v, item.p, false)
})

onMounted(async () => {
  console.log('onMOunted', props.initialValue, props.initialCursorPosition)
  parse(props.initialValue, props.initialCursorPosition, false)
  await nextTick()
  // setCursorPosition(prettyInput.value, props.initialCursorPosition)
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
