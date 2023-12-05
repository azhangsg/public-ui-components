<template>
  <div class="sandbox-container">
    <main>
      <p>This is the component sandbox.</p>
      <!-- <SearchBox
        :searchIn="[
          {
            label: 'All',
            value: '',
            selected: true,
          },
          {
            label: 'Services',
            value: 'service_packages,service_versions',
            selected: false,
          },
          {
            label: 'Users',
            value: 'users',
            selected: false,
          },
          {
            label: 'Developers',
            value: 'developers',
            selected: false,
          },
          {
            label: 'Documents',
            value: 'service_package_documents,service_version_documents',
            selected: false,
          },
        ]"
      /> -->
      <playGround />
    </main>
  </div>
</template>

<script setup lang="ts">
// import { SearchBox } from '../src'
import playGround from './playground.vue'
</script>
