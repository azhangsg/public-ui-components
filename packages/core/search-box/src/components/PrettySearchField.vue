<template>
  <div
    class="search-terms-pretty"
    contenteditable="true"
    placeholder="Add search criteria..."
  >
    <SearchTerm
      v-for="term in searchTerms"
      :key="term.key"
      :term="term"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import { getCursorPosition, setCursorPosition } from '../utils'
import { ref, nextTick, onMounted, watch } from 'vue'
import SearchTerm from './SearchTerm.vue'
import type { KQueryTerm } from './../types'

const props = defineProps({
  suggestion: {
    default: null,
  },
  searchTerms: {
    type: Object as PropType<Array<KQueryTerm>>,
    required: true,
  },
})

const emit = defineEmits(['search-terms-changed'])

const plainInput = ref(null)

const plainOnInput = (e: any) => {
  emit('search-terms-changed', e === null ? '' : e.target.innerText)
}

const setFieldValue = async (item) => {
  if (!item) {
    return
  }
  return
  console.log('suggestion:', item)
  const cursorPosition = getCursorPosition(plainInput.value)
  console.log('cursorPosition:', cursorPosition)

  let newV = ''
  let newCursorPosition = 0
  if (item.type === 'recent') {
    newV = item.value
    newCursorPosition = item.value.length
  } else {
    const searchTermsArr = plainInput.value.innerText.split('')
    searchTermsArr.splice(cursorPosition, 0, (cursorPosition === 0 ? '' : ' ') + item.value + ' ')
    newV = searchTermsArr.join('')
    newCursorPosition = cursorPosition + 1 + item.value.length
  }
  plainInput.value.innerText = newV

  emit('search-terms-changed', newV)

  await nextTick()
  setCursorPosition(plainInput.value, newCursorPosition)
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
  width: 100%;

  padding-left: 4px;
  padding-right: 4px;
  border: 0px;
  font-size: 18px;
  display: inline-block;

  &:focus {
    border-radius: 0px;
    outline: none;
    box-shadow: 0px;
  }
}
</style>
