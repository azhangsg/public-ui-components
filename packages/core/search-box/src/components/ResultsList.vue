<template>
  <div class="result-list">
    ResultsList:

    <pre>
      ?q={{ encodeURI(searchTermsString) }}
    </pre>

    <pre>
      {{ JSON.stringify(results, null, 2 ) }}
    </pre>
  </div>
</template>

<script setup lang="ts">
defineProps({
  searchTermsString: {
    type: String,
    default: '',
  },
  results: {
    type: Object,
    default: () => ({}),
  },
})
</script>
<style lang="scss" scoped>
.result-list {
  padding: 10px;
}
</style>
