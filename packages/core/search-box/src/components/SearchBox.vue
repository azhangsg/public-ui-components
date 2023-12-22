<template>
  <div>
    <div class="kong-ui-public-search-box">
      <div class="search-terms-container">
        <button class="search-start-btn">
          <KIcon
            icon="search"
            size="24px"
          />
        </button>

        <PrettySearchFiled
          v-if="searchEntryType == SearchEntryTypes.pretty"
          :key="`${currentKey.toString()}-pretty`"
          :initial-cursor-position="initialCursorPosition"
          :initial-value="initialSearchTermsString"
          @search-terms-changed="searchTermsChanged"
          @search-terms-error="searchTermsError"
          @start-search="startSearch"
        />
        <PlainSearchFiled
          v-if="searchEntryType == SearchEntryTypes.plain"
          :key="`${currentKey.toString()}-plain`"
          :initial-cursor-position="initialCursorPosition"
          :initial-value="initialSearchTermsString"
          @search-terms-changed="searchTermsChanged"
          @search-terms-error="searchTermsError"
          @start-search="startSearch"
        />
        <button
          v-if="searchTermsString != ''"
          class="search-for-clear-btn"
          :onclick="clearSearchTerms"
        >
          <KIcon
            icon="errorFilled"
            size="22"
          />
        </button>
      </div>
      <button
        class="search-field-type-btn"
        color=""
        :onclick="changeSearchEntryType"
      >
        <component
          :is="searchEntryTypeIcons[searchEntryType]"
          color="#64748b"
          :size="30"
        />
      </button>
    </div>
    <div
      v-if="parserError?.message"
      class="danger"
    >
      {{ parserError?.message }}
    </div>
    <KTabs
      v-model="activeTab"
      :tabs="tabs"
    >
      <template #tab1>
        <ResultsList
          :key="`${currentKey.toString()}-results`"
          :results="searchResults"
          :search-terms-string="searchTermsString"
        />
      </template>
      <template #tab2>
        <SuggestionsList
          :key="`${currentKey.toString()}-suggestions`"
          :cursor-position="cursorPosition"
          :fetch-field-names="props.fetchFieldNames"
          :fetch-recent-searches="props.fetchRecentSearches"
          :search-terms-string="searchTermsString"
          @suggestion-selected="suggestionSelected"
        />
      </template>
    </KTabs>
  </div>
</template>

<script setup lang="ts">

import type { PropType } from 'vue'
import { ref, computed } from 'vue'
import { SearchEntryTypes } from '../enums'
import type { KQueryParserError } from '../types'

import { ListIcon, TableIcon } from '@kong/icons'
import PlainSearchFiled from './PlainSearchFiled.vue'
import PrettySearchFiled from './PrettySearchField.vue'
import SuggestionsList from './SuggestionsList.vue'
import ResultsList from './ResultsList.vue'

const props = defineProps({
  fetchRecentSearches: {
    type: Function as PropType<() => Promise<string[]>>,
    default: () => ([]),
  },
  fetchFieldNames: {
    type: Function as PropType<() => Promise<string[]>>,
    default: () => ([]),
  },
  fetchResults: {
    type: Function as PropType<(searchQuery: string) => Promise<Object>>,
    default: () => ({}),
  },
})

const searchEntryType = ref<SearchEntryTypes>(SearchEntryTypes.pretty)
const initialSearchTermsString = ref('')
const searchTermsString = ref('')
const cursorPosition = ref(0)
const initialCursorPosition = ref(0)
const parserError = ref<KQueryParserError>()
const currentKey = ref<number>(new Date().getTime())
const searchResults = ref({})

const searchEntryTypeIcons = {
  plain: ListIcon,
  pretty: TableIcon,

}

const tabs = computed(() => {
  return [
    {
      hash: '#tab1',
      title: 'Results',
    },
    {
      hash: '#tab2',
      title: 'Sugestions',
    },
  ]
})

const activeTab = ref('#tab2')

const searchTermsChanged = (newSearchTermsString: string, newCursorPosition: number) => {
  console.log('SearchBox searchTermsChanged:', newSearchTermsString, newCursorPosition)
  searchTermsString.value = newSearchTermsString
  cursorPosition.value = newCursorPosition
}

const searchTermsError = (receivedError: KQueryParserError) => {
  parserError.value = receivedError
}

const resetSearchField = (newSearchTermsString: string, newCursorPosition: number) => {

  let resetKey = false
  console.log('resetSearchField:', newSearchTermsString, initialSearchTermsString.value, newCursorPosition, initialCursorPosition.value)
  if (newSearchTermsString === initialSearchTermsString.value || newCursorPosition === initialCursorPosition.value) {
    resetKey = true
  }
  initialSearchTermsString.value = newSearchTermsString
  initialCursorPosition.value = newCursorPosition
  if (resetKey) {
    currentKey.value += 1
  }
}

const suggestionSelected = (newSearchTermsString: string, newCursorPosition: number) => {
  console.log('suggestionSelected:', newSearchTermsString, newCursorPosition)
  resetSearchField(newSearchTermsString, newCursorPosition)
}

const changeSearchEntryType = async () => {
  searchEntryType.value = searchEntryType.value === SearchEntryTypes.plain ? SearchEntryTypes.pretty : SearchEntryTypes.plain
  console.log('changeSearchType to', searchEntryType.value, searchTermsString.value)
  resetSearchField(searchTermsString.value, searchTermsString.value.length)
}

const clearSearchTerms = () => {
  console.log('clearSearchTerms', initialSearchTermsString.value)
  searchTermsString.value = ''
  cursorPosition.value = 0
  resetSearchField('', 0)
}

const startSearch = async () => {
  console.log('start search??')
  if (parserError.value) {
    return
  }
  console.log('start search')
  activeTab.value = '#tab1'
  searchResults.value = await props.fetchResults(searchTermsString.value)
}

</script>

<style lang="scss" scoped>

.danger {
  background-color: red;
  margin-top: 20px;
  padding: 20px;
}
.kong-ui-public-search-box {
  align-items: stretch;
  align-items: center;
  display: flex;
  // Add component styles as needed
  flex-direction: row;
  justify-content: center;

  .search-terms-container {
    align-items: center;
    border: 1px solid gray;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width:100%;

    .query-suggestions {
      width: 100%;
      &:deep(.k-dropdown-popover)  {
        max-height: 260px;
        overflow-y: auto;
        li button  {
          padding-bottom: 4px;
          padding-top: 4px;
          span {
            font-weight: normal;
          }
        }
      }
    }

      .search-start-btn {
      align-items: center;
      background-color: transparent;
      border: 0px;
      display: flex;
      height: 44px;
    }

    .search-for-clear-btn {
      background-color: transparent;
      border: 0;
      margin-left: 10px;
      padding-top:4px;
    }
  }

  .search-field-type-btn {
     border:1px solid gray;
     border-bottom-right-radius: 6px;
     border-left:0px;
     border-top-right-radius: 6px;
     height: 46px;
     margin-left: auto;
     min-width:40px
  }
}
</style>
