<template>
  <div
    :class="`search-term ${searchTermClass}`"
    :contenteditable="isEditable"
    @focusout="onFocustout"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
  >
    <span
      v-if="term.termType === KQueryTermTypes.grouping"
      class="col"
      :contenteditable="true"
    >(</span>
    <span
      v-if="term.termType === KQueryTermTypes.space"
    >&nbsp;</span>

    {{ term.termValue }}
    <search-term
      v-for="item in term.children"
      :key="item.key"
      :term="item"
    />

    <span
      v-if="term.termType === KQueryTermTypes.grouping"
      class="col"
      :contenteditable="true"
    >)</span>
  </div>
  <span
    v-if="term.termType === KQueryTermTypes.fieldName"
    class="col"
    :contenteditable="true"
  >:</span>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import type { KQueryTerm } from './../types'
import { KQueryTermTypes } from './../enums'

const props = defineProps({
  term: {
    type: Object as PropType<KQueryTerm>,
    required: true,
  },
})

const emit = defineEmits(['search-term-changed', 'delete-right-term', 'focus-left'])

const term = computed((): KQueryTerm => {
  return props.term
})

const isEditable = computed((): boolean => {
  return !term.value.children && term.value.termType !== KQueryTermTypes.space
})

const onKeyDown = (e: KeyboardEvent) => {
  if (e.code === 'Enter') {
    e.stopPropagation()
    e.preventDefault()
    return false
  }
}

const onKeyUp = (e: any) => {
  console.log('searchTerm:', e, e.target.innerText)
  if (term.value.children) {
    return
  }

  if (e.code === 'Space') {
    if (!e.target.innerText.startsWith('"')) {
      emit('search-term-changed')
    }
    return
  }

  if (e.code === 'Backspace') {
    if (e.target.innerText === '') {
      emit('delete-right-term')
    }

  }

  // emit('search-terms-changed', e === null || !e.target ? '' : e.target.innerText)
}

const onFocustout = (e:any) => {
  return
  console.log('on onFocustout:', e, e.target.className)
  if (!e.target.className.split(' ').includes('empty')) {
    emit('search-term-changed')
  } else if (e.target.innerText !== '') {
    emit('search-term-changed')
  }
}

const searchTermClass = computed(() => {
  if (term.value.termType !== KQueryTermTypes.clause || !term.value?.children) {
    return term.value.termType
  }
  // only clause that doesn't have any children cluases has a class
  for (let i = 0; i < term.value?.children?.length; i++) {
    if ([KQueryTermTypes.clause, KQueryTermTypes.grouping].includes(term.value?.children[i]?.termType)) {
      // return ''
    }
  }
  return term.value.termType
})
</script>

<style lang="scss" scoped>
.search-term {
    display: inline-block;

    .col {
      color: magenta;
    }

    div {
      display: inline-block;
    }
    &:focus {
      border-radius: 0px;
      box-shadow: 0px;
      outline: none;
    }

    &.fieldValue {
      //padding: 0 4px;
    }

    &.fieldName {
      //padding: 0 4px;
    }

    &.or {
      // background-color: white;
      color: magenta;
      // margin:4px;
    }

    &.and {
      // background-color: white;
      color: magenta;
      // margin:4px;
    }

    &.exclusion {
      background-color: white;
      color: magenta;
    }

    &.grouping {
      // background-color: lightgray;
      // border: 1px solid gray;
    }
    &.clause {
      background-color: lightgray;
      border-radius: 6px;
      padding: 0 6px;
    }
    &.empty {
      margin-left:4px;
      min-width:4px;
    }
}
</style>
