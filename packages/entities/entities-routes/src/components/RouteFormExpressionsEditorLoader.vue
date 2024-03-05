<template>
  <template v-if="!editorInitialized">
    Loading...
  </template>
  <template v-else>
    <RouteFormExpressionsEditor
      v-model="expression"
      :protocol="props.protocol"
    />
  </template>
</template>

<script setup lang="ts">
import { asyncInit } from '@kong-ui-public/expressions'
import { onMounted, ref } from 'vue'
import RouteFormExpressionsEditor from './RouteFormExpressionsEditor.vue'

const props = defineProps<{ protocol?: string }>()
const expression = defineModel<string>({ required: true })
const editorInitialized = ref(false)

onMounted(() => {
  asyncInit.then(() => {
    editorInitialized.value = true
  })
})
</script>
