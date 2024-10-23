<template>
  <div>
    <h2 class="text-2xl font-semibold">Projects</h2>
    <section v-if="status === 'pending'">
      Loading...
    </section>
    <section v-else-if="error">
      Something went wrong... Try again
    </section>
    <section v-else>
      <p class="my-2">This is my Github projects</p>
      <ul class="grid grid-cols-1 gap-1">
        <li v-for="repo in repos" :key="repo.id" class="font-mono border border-gray-200 rounded-sm p-4 hover:bg-gray-100">
          <a :href="repo.html_url" target="_blank">
            <div class="flex items-center justify-between">
              <div class="font-semibold">
                {{ repo.name }}
              </div>
              <div>{{ repo.stargazers_count }} ★</div>
            </div>
            <p class="text-sm"> {{ repo.description }}</p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Projects'
})
type Repo = {
  id: number
  name: string
  stargazers_count: number
  description: string
  html_url: string
}

const { error, status, data } = useFetch('https://api.github.com/users/piotr-jura-udemy/repos')
const repos = computed(() => data.value?.filter((repo:Repo)=> repo.description).sort((a:Repo, b: Repo) => b.stargazers_count - a.stargazers_count))
</script>

<style scoped></style>