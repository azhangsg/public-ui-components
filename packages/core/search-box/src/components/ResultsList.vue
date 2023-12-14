<template>
  <div class="result-list">
    ResultsList:

    <pre>
      ?q={{ encodeURI(searchTermsString) }}
    </pre>
  </div>
</template>

<script setup lang="ts">
defineProps({
  searchTermsString: {
    type: String,
    default: '',
  },
})
</script>
<style lang="scss" scoped>
.result-list {
  padding: 10px;
}
</style>
