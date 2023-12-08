<template>
  <div
    ref="plainInput"
    class="search-terms-plain"
    contenteditable="true"
    placeholder="Add search criteria..."
    @keyup="plainOnInput"
  />
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { getCursorPosition, setCursorPosition } from '../utils'
import { ref, nextTick, onMounted, watch } from 'vue'
import { SuggestionTypes } from '../enums'
import type { SearchSuggestion } from '../types'

const props = defineProps({
  suggestion: {
    type: Object as PropType<SearchSuggestion>,
    default: null,
  },
})

const emit = defineEmits(['search-terms-changed'])

const plainInput = ref<HTMLElement>()

const plainOnInput = (e: any) => {
  emit('search-terms-changed', e === null || !e.target ? '' : e.target.innerText)
}

const setFieldValue = async (item: any) => {
  if (!item || !plainInput.value) {
    return
  }

  console.log('suggestion:', item)
  const cursorPosition = getCursorPosition(plainInput.value)
  console.log('cursorPosition:', cursorPosition)

  let newV = ''
  let newCursorPosition = 0
  if (item.type === SuggestionTypes.fieldName) {
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
    }

</style>
