<template>
  <ExpressionsEditor
    v-model="expression"
    :schema="schema"
  />
</template>

<script setup lang="ts">
// This is an async component
// It should be wrapped by a <Suspense /> component in the parent component
import { ExpressionsEditor, PROTOCOL_TO_SCHEMA_DEFINITION, createSchema } from '@kong-ui-public/expressions'
import { computed } from 'vue'

import '@kong-ui-public/expressions/dist/style.css'

const props = defineProps<{ protocol?: string }>()
const expression = defineModel<string>({ required: true })

const schema = computed(() => {
  if (props.protocol === undefined) {
    return createSchema({})
  }
  const schemaDef = PROTOCOL_TO_SCHEMA_DEFINITION[props.protocol as keyof typeof PROTOCOL_TO_SCHEMA_DEFINITION]
  return createSchema(schemaDef ?? {})
})
</script>
