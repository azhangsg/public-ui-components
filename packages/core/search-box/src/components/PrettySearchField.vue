<template>
  <div
    ref="prettyInput"
    class="search-terms-pretty"
    placeholder="Add search criteria..."
    @click="onClick"
  >
    <SearchTerm
      v-for="term in searchTerms"
      :key="term.key"
      :term="term"
      @delete-right-term="deleteRightTerm"
      @focus-left="focusLeft"
      @search-term-changed="searchTermChanged"
    />
    <span class="before-empty">&nbsp;</span>
    <SearchTerm
      :term="{ key: 'empty', termType: KQueryTermTypes.empty, idx: -1}"
      @delete-right-term="deleteRightTerm"
      @focus-left="focusLeft"
      @search-term-changed="searchTermChanged"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import { onMounted, watch, ref } from 'vue'
import SearchTerm from './SearchTerm.vue'
import type { KQueryTerm } from './../types'
import { KQueryTermTypes } from './../enums'
// import { getCursorPosition, setCursorPosition } from '../utils'

const props = defineProps({
  suggestion: {
    type: Object,
    default: null,
  },
  searchTerms: {
    type: Object as PropType<Array<KQueryTerm>>,
    required: true,
  },
})

const emit = defineEmits(['search-terms-changed'])

const prettyInput = ref<HTMLElement>()

const searchTermChanged = () => {
  console.log(`searchTermChanged in Pretty:>${prettyInput.value?.innerText}<`)
  emit('search-terms-changed', prettyInput.value?.innerText.replaceAll(String.fromCharCode(160), ' '))
  clearEmptyTerm()
}

const deleteRightTerm = () => {
  const children = prettyInput.value?.children
  console.log('children:', children)
  if (children) {
    console.log('to be deleted:', children[children?.length - 3])
    prettyInput.value?.removeChild(children[children?.length - 3])
    emit('search-terms-changed', prettyInput.value?.innerText.replaceAll(String.fromCharCode(160), ' '))
  }
}

const focusLeft = () => {
  console.log('focus left:')
}

const onClick = (e: any) => {
  if (e.target.className === 'search-terms-pretty') {
    const emptyEl = prettyInput.value?.querySelector('.empty') as HTMLElement
    if (emptyEl) {
      emptyEl.focus()
    }
  }
}

// const emit = defineEmits(['search-terms-changed'])

// const plainInput = ref(null)

// const plainOnInput = (e: any) => {
//   emit('search-terms-changed', e === null ? '' : e.target.innerText)
// }

const clearEmptyTerm = () => {
  const emptySpan = (prettyInput.value?.querySelector('.empty') as HTMLElement)
  console.log(emptySpan)
  emptySpan.innerHTML = ''
  emptySpan.focus()
}
const setFieldValue = async (item: any) => {
  clearEmptyTerm()
  if (!item) {
    return
  }
  console.log('suggestion:', item)
  emit('search-terms-changed', item.value)

}

watch(() => (props.suggestion), async (item) => {
  setFieldValue(item)
})

onMounted(() => {
  setFieldValue(props.suggestion)
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
