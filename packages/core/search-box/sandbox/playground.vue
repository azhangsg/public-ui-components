<template>
  <div
    id="fieldValues"
    contenteditable="true"

    v-html="props.defaultQS"
  />
  <div
    v-if="props.defaultQS"
    id="helper"
  >
    where:<p />
    <div class="field-value">
      field-value
    </div><br>
    <div class="field-name">
      field-name
    </div><br>
    <div class="or-list">
      or
    </div><br>
    <div class="and-list">
      and
    </div><br>
    <div class="exclusion">
      exclusion
    </div><br>
    <div class="grouping">
      grouping
    </div><br>
    <div class="clause">
      clause
    </div><br>
  </div>
  <p />
  <div v-if="kqueryCode">
    Kquery (Antlr4):
    <KCodeBlock
      id="my-code-block"
      :code="kqueryCode"
      is-processing
      language="json"
      max
      max-height="400px"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps({

  defaultQS: { type: String },
})

const kqueryCode = ref<string>('')

</script>

<style lang="scss">

#fieldValues {
  padding: 10px;
  margin-top:200px;
  border: 1px solid gray;
  div {
    display: inline-block;
  }
}

#fieldValues, #helper {
  div {
    display: inline-block;

    &.field-value {
      background-color: green;
      margin:4px;
    }

    &.field-name {
      background-color: red;
      margin:0px;
    }

    &.or-list {
      background-color: yellow;
      margin:4px;
      color: red;
    }

    &.and-list {
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
      padding: 4px;
      margin: 0 4px 0 4px;
      display: inline-block;
      border: 1px solid gray;
    }
    &.clause {
      background-color: lightblue;
      padding: 4px;
      margin: 0 4px 0 4px;
      border: 1px solid blue;
    }
  }
}
</style>
../antlr4/new/KQueryParser../antlr4/new/KQueryLexer../antlr4/new/KQueryParserListener../antlr4/new/KQueryParser
