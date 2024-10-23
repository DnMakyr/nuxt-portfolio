<template>
  <div>
    <nav class="flex font-mono">
                <ul class="flex space-x-4">
                    <li v-for="route in routes" :key="route.name">
                        <NuxtLink :to="route.path" class="link">{{ route.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
    routes: { name: string; path: string }[]
}>()
</script>

<style scoped>
.link {
  @apply p-2 font-semibold hover:bg-slate-200
}
</style>