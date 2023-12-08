<template>
  <div>
    <div class="kong-ui-public-search-box">
      <div class="search-terms-contaner">
        <button class="search-start-btn">
          <KIcon
            icon="search"
            size="24px"
          />
        </button>

        <KDropdown
          class="query-suggestions"
          :items="suggestionItems"
          selection-menu
          width="100%"
          @change="handleSuggestionSelect"
        >
          <PrettySearchFiled
            v-if="searchEntryType == SearchEntryTypes.pretty"
            :search-terms="searchTerms"
            :suggestion="selectedSuggestion"
            @search-terms-changed="searchTermsChanged"
          />
          <PlainSearchFiled
            v-if="searchEntryType == SearchEntryTypes.plain"
            :suggestion="selectedSuggestion"
            @search-terms-changed="searchTermsChanged"
          />
        </KDropdown>
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
  </div>
</template>

<script setup lang="ts">

// @ts-nocheck
import type { PropType } from 'vue'
import { ref, computed, onMounted } from 'vue'
import { SearchEntryTypes, SuggestionTypes } from '../enums'
import composables from '../composables'
import type { SearchSuggestion } from '../types'
import { ListIcon, TableIcon } from '@kong/icons'
import PlainSearchFiled from './PlainSearchFiled.vue'
import PrettySearchFiled from './PrettySearchField.vue'

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

const searchEntryType = ref<SearchEntryTypes>(SearchEntryTypes.plain)
const selectedSuggestion = ref(null)

const searchEntryTypeIcons = {
  plain: ListIcon,
  pretty: TableIcon,

}

const recentSearches = ref<string[]>([])
const fieldNames = ref<string[]>([])

const { searchTermsString, parse, parserError, searchTerms } = composables.useKQueryParser()

const suggestionItems = computed((): Array<SearchSuggestion> => {
  const entityFields = fieldNames.value

  return [
    ...(
      searchTermsString.value.trim().endsWith(':') ? [] : entityFields.reduce((a, b) => { a.push({ label: b + ':', value: b + ':', type: SuggestionTypes.fieldName }); return a }, [])
    ),
    ...(recentSearches.value.length > 0 ? [{ label: 'RECENT SEARCHES', disabled: true }] : []),
    ...recentSearches.value.reduce((a, b) => { a.push({ label: b, value: b, type: SuggestionTypes.recent }); return a }, []),
  ]
})

const searchTermsChanged = (newSearchTermsString: string) => {
  parse(newSearchTermsString)
}

const changeSearchEntryType = async () => {
  searchEntryType.value = searchEntryType.value === SearchEntryTypes.plain ? SearchEntryTypes.pretty : SearchEntryTypes.plain

  if (searchEntryType.value === SearchEntryTypes.plain) {
    selectedSuggestion.value = { type: 'recent', value: searchTermsString.value }
  }
  console.log('changeSearchType to', searchEntryType.value, searchTermsString.value, searchTerms.value)
}

const clearSearchTerms = () => {

  parse('')
  if (searchEntryType.value === SearchEntryTypes.plain) {
    selectedSuggestion.value = { type: 'recent', value: '' }
  }
}

const handleSuggestionSelect = async (item) => {
  selectedSuggestion.value = item
}

onMounted(async () => {
  recentSearches.value = await props.fetchRecentSearches()
  fieldNames.value = await props.fetchFieldNames()
})
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

  .search-terms-contaner {
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

      // [contenteditable=true]:empty:not(:focus):before {
      //   content: attr(placeholder);
      //   font-size: 22px;
      //   pointer-events: none;
      //   color: gray;
      //   //display: block; /* For Firefox */
      // }

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
