lay<template>
  <div class="sandbox-container">
    <main>
      <p>This is the component sandbox.</p>
      <SearchBox
        :fetch-field-names="fieldNamesFetcher"
        :fetch-recent-searches="recentSearchesFetcher"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { SearchBox } from '../src'

const recentSearchesFetcher = async () => {
  return [
    'A B',
    '(geo.country: "United Kingdom" OR geo.country: Iceland) AND geo.city: London',
    '@geo.country:("United Kingdom" OR Iceland) @geo.city:LOndon - this pone doesn\'t work till TPS-1813 is resolved',
    'KAuth',
    'Kauth OR Kaudit',
    'Kauth AND Production',
    'Kauth AND -Production',
    'Kauth Production',
    'tag:prod tag:new',
    'label.env:prod AND label.team:kauth',
    '(type: routes OR type: SNIs) AND label.team:kauth',
    'type:routes OR (type:SNIs AND label.team:kauth)',
    '(type:routes AND label.team:kauth) OR (type:" SNIs" AND label.team:"ksearch")',
    '@name:"KSearch Service"',
  ]
}

const fieldNamesFetcher = async () => {
  return [
    'description',
    'name',
    'labels',
    'type',
  ]
}
</script>
