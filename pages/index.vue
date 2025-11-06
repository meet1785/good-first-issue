<template>
  <div class="p-4 w-full">
    <div v-if="searchQuery && filteredRepositories.length === 0" class="text-center py-12 text-slate">
      <p class="text-lg">No repositories found matching "{{ searchQuery }}"</p>
      <p class="text-sm mt-2">Try a different search term</p>
    </div>
    <div v-else-if="searchQuery" class="mb-4 text-sm text-vanilla-400">
      Found {{ filteredRepositories.length }} {{ filteredRepositories.length === 1 ? 'repository' : 'repositories' }} matching "{{ searchQuery }}"
    </div>
    <RepoBox v-for="repo in filteredRepositories" :key="repo.id" :repo="repo" />
  </div>
</template>

<script setup>
import Repositories from '~/data/generated.json'
import filterRepositories from '~/utils/filterRepositories'

useHead({
  title: 'Good First Issue: Make your first open-source contribution',
  meta: [
  {
    name: 'description',
    content: 'Making your first open-source contribution is easier than you think. Good First Issue is a curated list of issues from popular open-source projects that you can easily fix. Start today!'
  }
  ]
})

const searchQuery = useSearchQuery()
const openRepoId = useOpenRepoId()

const filteredRepositories = computed(() => filterRepositories(Repositories, searchQuery.value))

watch(filteredRepositories, (repos) => {
  if (!openRepoId.value) {
    return
  }

  const repoStillVisible = repos.some(repo => repo.id === openRepoId.value)
  if (!repoStillVisible) {
    openRepoId.value = null
  }
}, { immediate: true })
</script>
