lay<template>
  <div class="sandbox-container">
    <main>
      <p />
      <SearchBox
        :fetch-field-names="fieldNamesFetcher"
        :fetch-recent-searches="recentSearchesFetcher"
        :fetch-results="resultsFetcher"
      />
    </main>
  </div>
  <p />
  <hr>
  PAT:
  <p />
  <input
    v-model="patKey"
    type="password"
  >
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SearchBox } from '../src'
import axios from 'axios'

const patKey = ref('')
const recentSearchesFetcher = async () => {
  return [
    'A',
    '-AA A',
    '(geo.country:"United Kingdom" OR geo.country:Iceland) AND geo.city:London',
    '@geo.country:("United Kingdom" OR Iceland) @geo.city:LOndon - this one doesn\'t work till TPS-1813 is resolved',
    'KAuth',
    'Kauth OR Kaudit',
    'name:default OR name:nix-cipher@null.net',
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

const resultsFetcher = async (q) => {
  if (!patKey.value) {
    return { error: 'no pat key' }
  }
  const resp = await axios.get(`${window.location.hostname === 'localhost' ? '/kong-api' : 'whttps://us.api.konghq.tech'}/v0/search`, {
    params: {
      q,
    },
    headers: {
      authorization: `Bearer ${patKey.value}`,
    },
  })
  console.log(resp)
  return resp.data.data
}
</script>
