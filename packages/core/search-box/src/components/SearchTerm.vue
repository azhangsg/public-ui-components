<template>
  <div
    :class="`search-term ${term.termType}`"
    contenteditable="true"
  >
    <span
      v-if="term.termType === KQueryTermTypes.grouping"
    >(</span>
    <span
      v-if="term.termType === KQueryTermTypes.clause"
    >{{ " " }}</span>
    <span>{{ term.termValue }}</span>
    <search-term
      v-for="item in term.children"
      :key="item.key"
      :term="item"
    />

    <span
      v-if="term.termType === KQueryTermTypes.grouping"
      contenteditable="true"
    >)</span>
    <span
      v-if="term.termType === KQueryTermTypes.fieldName"
    >:</span>
    <span
      v-if="term.termType === KQueryTermTypes.clause"
    >{{ " " }}</span>
  </div>
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

</script>

<style lang="scss" scoped>
.search-term {
    display: inline-block;

    div {
      display: inline-block;
    }
    &.fieldValue {
      background-color: green;
      margin:4px;
    }

    &.fieldName {
      background-color: red;
      margin:0px;
    }

    &.or {
      background-color: yellow;
      margin:4px;
      color: red;
    }

    &.and {
      background-color: lightyellow;
      margin:4px;
      color: red;
    }

    &.exclusion {
      background-color: magenta;
      margin:4px;
    }

    &.grouping {
      background-color: lightgray;
      padding: 2px 4px;
      margin: 0 4px;
      display: inline-block;
      border: 1px solid gray;
    }
    &.clause {
      background-color: lightblue;
      padding: 2px 4px;
      margin: 0 4px;
      border: 1px solid blue;
    }
}
</style>
