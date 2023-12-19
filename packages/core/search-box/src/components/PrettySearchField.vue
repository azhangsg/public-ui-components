<template>
  <div
    ref="prettyInput"
    :class="`search-terms-pretty ${searchTermsString ? '' : ' empty'}`"
    contenteditable="false"
    placeholder="Add search criteria..."
    tabindex="-1"
  >
    <SearchTerm
      v-for="term in searchTerms"
      :key="term.key"
      :term="term"
      @fZocus-next="onFocusNext"
      @fZocus-prev="onFocusPrev"
      @sZtart-search="onStartSearch"
      @uZpdate-term="onUpdateTerm"
    />
  </div>
</template>

<script setup lang="ts">
import composables from '../composables'
import { onMounted, watch, ref, nextTick } from 'vue'
import SearchTerm from './SearchTerm.vue'
import { setCursorPosition } from '../utils'

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

const { searchTermsString, parse, parserError, searchTerms, cursorPosition, updateTerm } = composables.useKQueryParser()

const emit = defineEmits(['search-terms-changed', 'search-terms-error', 'start-search'])

const prettyInput = ref<HTMLElement>()

const onFocusNext = (dataKey: string) => {
  const currentIdx = searchTerms.value.findIndex(t => t.key === dataKey)
  console.log('onFocusNext:', dataKey, currentIdx)
  if (currentIdx === -1 || currentIdx === searchTerms.value.length - 1) {
    return
  }
  (prettyInput.value?.querySelector(`[data-key="${searchTerms.value[currentIdx + 1].key}"]`) as HTMLElement).focus()
}

const onFocusPrev = (dataKey: string) => {
  const currentIdx = searchTerms.value.findIndex(t => t.key === dataKey)
  console.log('onFocusPrev:', dataKey, currentIdx)
  if (currentIdx < 1 || currentIdx === searchTerms.value.length) {
    return
  }
  const prevEl = (prettyInput.value?.querySelector(`[data-key="${searchTerms.value[currentIdx - 1].key}"]`) as HTMLElement)
  console.log('prevEl:', prevEl)
  if (!prevEl) {
    console.log('focusing??')
    return
  }
  setCursorPosition(prevEl, prevEl.innerText.length)
  prevEl.focus()
}

const onStartSearch = () => {
  console.log('onStartSearch:')
  emit('start-search')
}

const onUpdateTerm = (newValue: string, key: string) => {
  console.log('onUpdateTerm:', newValue, key)
  updateTerm(newValue, key)
}

watch(parserError, (newValue) => {
  console.log('!!! errorValue:', newValue)
  emit('search-terms-error', newValue)
})

watch(() => ({ v: searchTermsString.value, p: cursorPosition.value }), async (newValue, oldValue) => {
  console.log('fire changed based on result of parse')
  if (newValue.v !== oldValue.v) {
    await nextTick()
    prettyInput.value?.focus()
    // setCursorPosition(prettyInput.value, newValue.p)
  }

  emit('search-terms-changed', newValue.v, newValue.p)
})

watch(() => ({ v: props.initialValue, p: props.initialCursorPosition }), async (item) => {
  console.log('fire parse based on changed props ')
  parse(item.v, item.p, false)
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
  &.empty:not(:focus):before {
    color: gray;
    content: attr(placeholder);
    font-size: 18px;
    pointer-events: none;
  }
}

</style>
