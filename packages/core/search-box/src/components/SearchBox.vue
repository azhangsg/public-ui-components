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
          :cursor-position="cursorPosition"
          :search-terms="searchTerms"
          @search-terms-changed="searchTermsChanged"
        />
        <PlainSearchFiled
          v-if="searchEntryType == SearchEntryTypes.plain"
          :initial-cursor-position="initialCursorPosition"
          :initial-value="initialSearchTermsValue"
          @search-terms-changed="searchTermsChanged"
        />
        <!-- </KDropdoZwn> -->
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
        <ResultsList />
      </template>
      <template #tab2>
        <SuggestionsList
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
import composables from '../composables'
import { SearchEntryTypes } from '../enums'

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
})

const searchEntryType = ref<SearchEntryTypes>(SearchEntryTypes.pretty)
const initialSearchTermsValue = ref('')
const initialCursorPosition = ref(0)

const searchEntryTypeIcons = {
  plain: ListIcon,
  pretty: TableIcon,

}

const { searchTermsString, parse, parserError, searchTerms, cursorPosition } = composables.useKQueryParser()

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

const activeTab = computed(() => {
  return '#tab2'
})

const searchTermsChanged = (newSearchTermsString: string, newCursorPosition: number) => {
  parse(newSearchTermsString, newCursorPosition, true)
}

const suggestionSelected = (newSearchTermsString: string, newCursorPosition: number) => {
  console.log('suggestionSelected:', newSearchTermsString, newCursorPosition)
  parse(newSearchTermsString, newCursorPosition, false)
  initialSearchTermsValue.value = newSearchTermsString
  initialCursorPosition.value = newCursorPosition
}

const changeSearchEntryType = async () => {
  searchEntryType.value = searchEntryType.value === SearchEntryTypes.plain ? SearchEntryTypes.pretty : SearchEntryTypes.plain

  initialSearchTermsValue.value = searchTermsString.value
  initialCursorPosition.value = searchTermsString.value.length
  console.log('changeSearchType to', searchEntryType.value, searchTermsString.value, searchTerms.value)
}

const clearSearchTerms = () => {

  parse('', 0, false)
  if (searchEntryType.value === SearchEntryTypes.plain) {
    initialSearchTermsValue.value = ''
  }
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
