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
import { ref, computed, defineEmits, nextTick, onMounted, watch } from 'vue'
import { SearchEntryTypes } from '../enums'
import composables from '../composables'
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

const suggestionItems = computed(() => {
  const entityFields = fieldNames.value

  return [
    ...(
      searchTermsString.value.trim().endsWith(':') ? [] : entityFields.reduce((a, b) => { a.push({ label: b + ':', value: b + ':', type: 'fields' }); return a }, [])
    ),
    ...(recentSearches.value.length > 0 ? [{ label: 'RECENT SEARCHES', disabled: true }] : []),
    ...recentSearches.value.reduce((a, b) => { a.push({ label: b, value: b, type: 'recent' }); return a }, []),
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
  padding: 20px;
  margin-top: 20px;
}
.kong-ui-public-search-box {
  // Add component styles as needed
  flex-direction: row;
  align-items: stretch;
  display: flex;
  align-items: center;
  justify-content: center;

  .search-terms-contaner {
    display: flex;
    flex-direction: row;
    border: 1px solid gray;
    width:100%;
    align-items: center;
    justify-content: center;

    .query-suggestions {
      width: 100%;
      &:deep(.k-dropdown-popover)  {
        max-height: 260px;
        overflow-y: auto;
        li button  {
          padding-top: 4px;
          padding-bottom: 4px;
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
      display: flex;
      align-items: center;
      height: 44px;
      border: 0px;
      background-color: transparent;
    }

    .search-for-clear-btn {
      margin-left: 10px;
      border: 0;
      padding-top:4px;
      background-color: transparent;
    }
  }

  .search-field-type-btn {
     margin-left: auto;
     height: 46px;
     border:1px solid gray;
     border-left:0px;
     border-top-right-radius: 6px;
     border-bottom-right-radius: 6px;
     min-width:40px
  }
}
</style>
