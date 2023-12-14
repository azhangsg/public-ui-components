<template>
  <div
    ref="plainInput"
    class="search-terms-plain"
    contenteditable="true"
    placeholder="Add search criteria..."
    @click="onClick"
    @keydown.stop="onKeyDown"
    @keyup="onKeyUp"
  />
</template>

<script setup lang="ts">
import { getCursorPosition, setCursorPosition } from '../utils'
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

const emit = defineEmits(['search-terms-changed'])

const plainInput = ref<HTMLElement>()

const onKeyDown = (e: KeyboardEvent) => {
  if (e.code === 'Enter') {
    e.stopPropagation()
    e.preventDefault()
    return false
  }
}

const onClick = (e: FocusEvent) => {
  fireChangedEvent(e)
}

const onKeyUp = (e: any) => {
  fireChangedEvent(e)
}

const fireChangedEvent = (e: FocusEvent | KeyboardEvent) => {
  const htmlEl = e.target as HTMLElement
  const cursorPosition = getCursorPosition(htmlEl)
  console.log('fireChangedEvent:', e, cursorPosition, htmlEl)
  emit('search-terms-changed', htmlEl.innerText.replaceAll(String.fromCharCode(160), ' '), cursorPosition)
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

}

watch(() => ({ v: props.initialValue, p: props.initialCursorPosition }), async (item) => {
  setFieldValue(item.v, item.p)
})

onMounted(() => {
  console.log('onMOunted', props.initialValue)
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
    }

</style>
