<template>
  <div class="kong-ui-public-search-box">
    <SearchDropdownMenu
      v-if="searchIn.length > 0"
      class="dropdown-search-filter"
      data-testid="search-dropdown-toggle"
      :options="searchIn"
      @change="changeSearchOption"
    />

    <div class="seatch-terms-contaner">
      <button class="search-start-btn">
        <KIcon icon="search" size="24px" />
      </button>

      <div  v-if="searchType=='pretty'"
        class="search-terms pretty">
        <div class="term-container">
            Country(2 terms)
        </div>
        <div class="term-container">
          State(2 terms)
        </div>
          <div class="term-container">
              Country(2 terms)
          </div>
          <div class="term-container">
            State(2 terms)
          </div>
          <div class="term-container">
              Country(2 terms)
          </div>
          <div class="term-container">
            State(2 terms)
          </div>
          <div class="term-container">
              Country(2 terms)
          </div>
          <div class="term-container">
            State(2 terms)
          </div>
          <div class="empty pretty" contenteditable="true"></div>
      </div>

      <div
        v-if="searchType == 'plain'"
        class="search-terms plain">
          <span
            class="empty plain"
            contenteditable="true"
            @blur="plainOnInput"
            placeholder="Add search criteria...">
            {{ searchTerms }}
        </span>
      </div>
      <button
        v-if="searchTerms != ''"
        class="search-for-clear-btn"
        :onclick="clearSearchTerms"
        >
          <KIcon icon="errorFilled" size="22"/>
      </button>
    </div>
    <button
      class="search-field-type-btn"
      :onclick="changeSearchType">
          <KIcon :icon="searchType === 'plain' ? 'serviceDocument': 'filter' " size="22"/>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import {ref} from 'vue'
import SearchDropdownMenu from './SearchDropdownMenu.vue'
import type { DropdownItem } from '@kong/kongponents'
import type { SearchTerms } from '../types'
import composables from '../composables'

defineProps({
  searchIn: {
    type: Array as PropType<DropdownItem[]>,
    default: () => ([]),
  },
})

const changeSearchOption = (option: DropdownItem) => {
  clearSearchTerms()
}

const searchType = ref<SearchTerms>('plain')

const { getSearchTerms, setSearchTerms } = composables.useSearchTerms()

setSearchTerms('country:(US,DE) browser:chrome')

const searchTerms = getSearchTerms()

const changeSearchType = () => {
  searchType.value = searchType.value === 'plain' ? 'pretty' : 'plain'
}
const clearSearchTerms = () => {
  setSearchTerms('')
}
const plainOnInput = (e: any) => {
  console.log(e)
  setSearchTerms(e.data === null ? '' : e.target.innerText)
}


</script>

<style lang="scss" scoped>
.kong-ui-public-search-box {
  // Add component styles as needed
  flex-direction: row;
  align-items: stretch;
  display: flex;
  min-height: 144px;
  align-items: center;
  justify-content: center;

  .seatch-terms-contaner {
    display: flex;
    flex-direction: row;
    border: 1px solid gray;
    width:100%;
    align-items: center;
    justify-content: center;

    .search-terms {
      align-items: center;
      width:100%;

      padding-left: 4px;
      padding-right: 4px;
    }
      .term-container {
        max-height: 44px;
        background-color: lightblue;
        display: inline-block;
        white-space: nowrap;
        margin:8px 4px;
        padding:4px;
        border-radius: 8px;
      }
      .empty {
        //width: 100%;
        max-height: 44px;
        padding:4px;
        &.pretty {
          display: inline;
          flex-grow: 1;
          min-width: 200px;
          font-size: 14px;
          background-color: yellowgreen;
        }
        &.plain {
          border: 0px;
          font-size: 20px;
          display: inline-block;
          padding-bottom: 8px;
        }
        &:focus {
          border-radius: 0px;
          outline: none;
          box-shadow: 0px;
        }

      }

      [contenteditable=true]:empty:not(:focus):before {
        content: attr(placeholder);
        font-size: 22px;
        pointer-events: none;
        color: gray;
        //display: block; /* For Firefox */
      }

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
     padding-top:6px;
     border:1px solid gray;
     border-left:0px;
     border-top-right-radius: 6px;
     border-bottom-right-radius: 6px;
     min-width:40px
  }
}
</style>
