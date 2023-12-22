<template>
  <div class="suggestion-panel">
    terms: {{ props.searchTermsString }}
    <br>
    pattern: {{ suggestionPattern }}
    <div v-if="fieldNamesFiltered.length">
      <h4>Feld Names</h4>
      <ul>
        <li
          v-for="field in fieldNamesFiltered"
          :key="field"
          tabindex="0"
          @click.stop="() => setSuggestion(SuggestionTypes.fieldName, field)"
          v-html="itemHtml(field)"
        />
      </ul>
    </div>
    <div v-if="recentSearchesFiltered.length">
      <h4>Recent Searches</h4>
      <ul>
        <li
          v-for="recent in recentSearchesFiltered"
          :key="recent"
          tabindex="0"
          @click.stop="() => setSuggestion(SuggestionTypes.recent, recent)"
          v-html="itemHtml(recent)"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { ref, computed, onMounted } from 'vue'
import { SuggestionTypes } from '../enums'

const props = defineProps({
  fetchRecentSearches: {
    type: Function as PropType<() => Promise<string[]>>,
    default: () => ([]),
  },
  fetchFieldNames: {
    type: Function as PropType<() => Promise<string[]>>,
    default: () => ([]),
  },
  searchTermsString: {
    type: String,
    default: '',
  },
  cursorPosition: {
    type: Number,
    default: 0,
  },
})

const recentSearches = ref<string[]>([])
const fieldNames = ref<string[]>([])

const suggestionPattern = computed(() => {
  const strArr = props.searchTermsString.substring(0, props.cursorPosition).split(/[\s:)(]/)
  const last = strArr[strArr.length - 1]
  console.log('last:', last, strArr, props.searchTermsString.substring(0, props.cursorPosition))
  return last === ':' ? strArr[strArr.length - 2] + last : last
})

const fieldNamesFiltered = computed(() => {
  return fieldNames.value.filter(fieldName => (fieldName.includes(props.searchTermsString) || fieldName.includes(suggestionPattern.value)))
})

const recentSearchesFiltered = computed(() => {
  return recentSearches.value.filter(recentSearch => (recentSearch.includes(props.searchTermsString) || recentSearch.includes(suggestionPattern.value)))
})

const itemHtml = (item: string) => {
  return item.replace(suggestionPattern.value, `<span class='suggestion'>${suggestionPattern.value}</span>`)
}
const emit = defineEmits(['suggestion-selected'])

const setSuggestion = (suggestionType: SuggestionTypes, suggestionString: string) => {
  console.log(suggestionType, suggestionString)
  if (suggestionType === SuggestionTypes.recent) {
    emit('suggestion-selected', suggestionString, suggestionString.length + 1)
    return
  }

  if (suggestionType === SuggestionTypes.fieldName) {
    // get the last field
    let finalString = props.searchTermsString
    let cursorPos = props.cursorPosition
    const strArr = props.searchTermsString.substring(0, props.cursorPosition).split(/ /)
    if (suggestionString.startsWith(strArr[strArr.length - 1])) {
      cursorPos -= strArr[strArr.length - 1].length + 1
      strArr.pop()
      finalString = strArr.join(' ') + props.searchTermsString.substring(props.cursorPosition, props.searchTermsString.length)
    }
    const searchTermsArr = finalString.split('')
    searchTermsArr.splice(cursorPos, 0, (cursorPos === 0 ? '' : ' ') + suggestionString + ': ')
    emit('suggestion-selected', searchTermsArr.join(''), cursorPos + 3 + suggestionString.length)
  }
}

onMounted(async () => {
  const res = await Promise.all([props.fetchRecentSearches(), props.fetchFieldNames()])
  recentSearches.value = res[0]
  fieldNames.value = res[1]
})

</script>

<style lang="scss" scoped>
.suggestion-panel {
  ul {
    list-style: none;
    margin-bottom: $kui-space-0;
    max-height: 40vh;
    overflow-y: auto;
    padding: $kui-space-0;
    li {
      padding: 2px;
      &:hover {
        background-color: lightgray;
        cursor: pointer;
      }
      &:deep(.suggestion) {
        background-color: lightblue;
      }

    }
  }

}
</style>
