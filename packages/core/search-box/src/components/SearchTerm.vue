<template>
  <div
    :class="`search-term ${searchTermClass}`"
  >
    <span
      v-if="term.termType === KQueryTermTypes.grouping"
      class="col grouping-start"
    >(</span>
    <span
      v-if="term.termType === KQueryTermTypes.space"
    >&nbsp;</span>

    <span>{{ term.termValue }}</span>
    <search-term
      v-for="item in term.children"
      :key="item.key"
      :term="item"
    />

    <span
      v-if="term.termType === KQueryTermTypes.grouping"
      class="col grouping-end"
    >)</span>
  </div>
  <span
    v-if="term.termType === KQueryTermTypes.fieldName"
    class="col"
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

const term = computed((): KQueryTerm => {
  return props.term
})

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
      padding: 0 2px;
      &.grouping-start {
        padding-right: 4px;
      }
      &.grouping-end {
        padding-left: 4px;
      }
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
      background-color: blue;
      color: magenta;
    }

    &.grouping {
      // background-color: lightgray;
      // border: 1px solid gray;
    }
    &.clause {
      background-color: blue;
      border-radius: 6px;
      color: white;
      padding: 0 6px;
    }
    &.empty {
      margin-left:4px;
      min-width:4px;
    }
}
</style>
