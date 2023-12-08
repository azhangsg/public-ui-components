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
import { getCursorPosition, setCursorPosition } from '../utils'
import { ref, defineEmits, nextTick, onMounted, watch } from 'vue'

const props = defineProps({
  suggestion: {
    default: null,
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
    .search-terms-plain {
      align-items: center;
      width:100%;

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
