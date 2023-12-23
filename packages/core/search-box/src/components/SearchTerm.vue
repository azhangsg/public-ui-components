<template>
  <span
    :class="`search-term ${term.termType} ${clauseEnd} ${clauseStart}`"
    :data-key="term.key"
  >
    {{ term.termValue }}
  </span>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import { KQueryTermTypes } from './../enums'
import type { KQueryTerm } from './../types'

const props = defineProps({
  term: {
    type: Object as PropType<KQueryTerm>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  searchTerms: {
    type: Object as PropType<KQueryTerm[]>,
    required: true,
  },
})

const clauseEnd = computed(() => {
  if ([KQueryTermTypes.fieldValue, KQueryTermTypes.fieldName].includes(props.term.termType)) {
    console.log('???', props.term, props.index)
    if (props.index < props.searchTerms.length - 1 && props.searchTerms[props.index + 1].termType === KQueryTermTypes.colon) {
      console.log('!!!')
      return 'in-clause-end'
    }
  }
  return ''
})

const clauseStart = computed(() => {
  if ([KQueryTermTypes.fieldValue, KQueryTermTypes.fieldName].includes(props.term.termType)) {
    if (props.index > 0 && props.searchTerms[props.index - 1].termType === KQueryTermTypes.colon) {
      return 'in-clause-start'
    }
  }
  return ''
})

</script>

<style lang="scss" scoped>
.search-term {
  display: inline-block;
  white-space: pre;
  &:after {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0px;
  }

  &:focus {
    border-radius: 0px;
    box-shadow: 0px;
    outline: none;
  }

  &.fieldValue {
    background-color: rgb(0, 89, 255);
    border-radius: 6px;
    color: white;
    &.in-clause-start {
      border-radius: 0 6px 6px 0;
    }
  }

  &.fieldName {
    background-color: rgb(0, 89, 255);
    border-radius: 6px;
    color: white;
    &.in-clause-end {
      border-radius: 6px 0 0 6px;
    }

  }
  &.colon {
    background-color: rgb(0, 89, 255);
    color: magenta;
  }

  &.or {
    color: magenta;
  }

  &.and {
    color: magenta;
  }

  &.exclusion {
    color: magenta;
  }

  &.grouping {
    color: magenta;
    //padding-right: 2px;
  }
  &.grouping-end {
    color: magenta;
    //padding-left: 2px;
  }

  &.clause {
    background-color: rgb(0, 89, 255);
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    color: white;
    //min-width: 6px;
  }

  &.clause-end {
    background-color: rgb(0, 89, 255);
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    color: white;
    //min-width: 6px;
  }
}
</style>
