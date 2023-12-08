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
      color: red;
      margin:4px;
    }

    &.and {
      background-color: lightyellow;
      color: red;
      margin:4px;
    }

    &.exclusion {
      background-color: magenta;
      margin:4px;
    }

    &.grouping {
      background-color: lightgray;
      border: 1px solid gray;
      display: inline-block;
      margin: 0 4px;
      padding: 2px 4px;
    }
    &.clause {
      background-color: lightblue;
      border: 1px solid blue;
      margin: 0 4px;
      padding: 2px 4px;
    }
}
</style>
