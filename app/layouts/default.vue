<template>
    <div>
        <header class="flex bg-slate-400">
            <nav class="flex">
                <ul class="flex flex-1 space-x-3">
                    <li v-for="route in routes" :key="route.name" class="p-4">
                        <NuxtLink :to="route.path" class=" p-4 font-semibold text-white hover:bg-slate-600">{{ route.name }}</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <p>&copy; 2024</p>
        </footer>
    </div>
</template>

<script lang="ts" setup>

const routes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' }
]

</script>