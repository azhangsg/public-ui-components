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

import { onMounted, watch } from 'vue'
import SearchTerm from './SearchTerm.vue'
import type { KQueryTerm } from './../types'

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

// const emit = defineEmits(['search-terms-changed'])

// const plainInput = ref(null)

// const plainOnInput = (e: any) => {
//   emit('search-terms-changed', e === null ? '' : e.target.innerText)
// }

const setFieldValue = async (item: any) => {
  if (!item) {
    return
  }
  console.log('suggestion:', item)
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
}
</style>
