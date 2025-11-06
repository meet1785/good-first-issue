<template>
  <header class="w-full py-4 border-b border-ink-200 bg-ink-400">
    <nav class="flex items-center justify-center flex-wrap gap-4 px-4">
      <NuxtLink to="/" class="flex items-center text-gray-700 font-bold">
        <img src="~/assets/gfi-logo-white.svg" alt="Good First Issue" class="h-12" />
      </NuxtLink>
      <span v-if="activeTag" class="text-2xl cursor-pointer">
        <span class="font-normal ml-2 mr-1 text-slate">/</span>
        <span class="font-semibold text-juniper">{{ activeTag.language }}</span>
      </span>
      <div class="flex-grow max-w-md">
        <input
          v-model="searchQuery"
          type="search"
          placeholder="Search repositories..."
          class="w-full bg-ink-300 text-vanilla-100 px-4 py-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-juniper placeholder-slate"
        />
      </div>
    </nav>
  </header>
</template>

<script setup>
import Tags from '~/data/tags.json'

const route = useRoute()
const searchQuery = useSearchQuery()

const activeTag = computed(() => {
  return Tags.find(tag => tag.slug === route.params.slug)
})

// Reset search when navigating between pages
watch(() => route.path, () => {
  searchQuery.value = ''
})
</script>
