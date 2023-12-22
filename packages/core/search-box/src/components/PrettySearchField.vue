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
      @update-term="onUpdateTerm"
    />
  </div>
</template>

<script setup lang="ts">
import composables from '../composables'
import { onMounted, watch, ref, nextTick } from 'vue'
import SearchTerm from './SearchTerm.vue'
import { setCursorPosition } from '../utils'
import { UpdateTermActions, KQueryTermTypes } from '../enums'

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
  updateTerm,
  getActiveTerm,
  getNextEditableKey,
  getPrevEditableKey,
} = composables.useKQueryParser()

const emit = defineEmits(['search-terms-changed', 'search-terms-error', 'start-search'])

const prettyInput = ref<HTMLElement>()

const setCursorForActiveTerm = (termKey: string|null, cursorPos: number = -1) => {
  if (!termKey) {
    return
  }
  const activeEl = prettyInput.value?.querySelector(`[data-key="${termKey}"]`) as HTMLElement
  if (!activeEl) {
    return
  }
  setCursorPosition(activeEl, cursorPos === -1 ? activeEl.innerText.length : cursorPos)

}

const onFocusNext = (termKey: string) => {
  setCursorForActiveTerm(getNextEditableKey(termKey), 0)
}

const onFocusPrev = (termKey: string) => {
  setCursorForActiveTerm(getPrevEditableKey(termKey), -1)
}

// this is to force focus on the last term when container field gets a click
const onClick = (e: MouseEvent) => {
  if ((e.target as HTMLElement).className === 'search-terms-pretty') {
    setCursorForActiveTerm(searchTerms.value[searchTerms.value.length - 1].key, 0)
  }
}

const onUpdateTerm = async (newValue: string, termKey: string, postAction: UpdateTermActions) => {
  console.log('onUpdateTerm:', newValue, termKey, postAction)
  await updateTerm(newValue, termKey, postAction)

  if (postAction === UpdateTermActions.startSearch) {
    emit('start-search')
  }
  /*
  else if (postAction === UpdateTermActions.focusPrev) {
    setCursorForActiveTerm(getPrevEditableKey(termKey), -1)
  } else if (postAction === UpdateTermActions.focusNext) {
    setCursorForActiveTerm(getNextEditableKey(termKey), -1)
  }
  */
}

watch(parserError, (newValue) => {
  console.log('!!! errorValue:', newValue)
  emit('search-terms-error', newValue)
})

watch(() => ({ v: searchTermsString.value, p: cursorPosition.value }), async (newValue, oldValue) => {
  console.log('fire changed based on result of parse:', newValue)
  if (newValue.v !== oldValue.v || newValue.p !== oldValue.p) {
    await nextTick()
    const activeTerm = getActiveTerm(newValue.p)
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
