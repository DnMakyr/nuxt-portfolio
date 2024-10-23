<template>
    <div class="container mx-auto max-w-2xl">
        <header class="flex justify-between items-center mt-2">
            <div>
                <NuxtLink to="/" class="p-2 font-semibold font-cookie hover:bg-slate-200">Le Dai Nguyen</NuxtLink>
            </div>
            <Menu :routes="routes" />
        </header>
        <main class="p-2 mt-10">
            <slot />
        </main>
        <footer>
            <p>&copy; 2024</p>
        </footer>
    </div>
</template>

<script lang="ts" setup>
const routes = [
    { name: 'Main', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Projects', path: '/projects' }
]
useHead({
    titleTemplate: '%s | DN',
    link:[
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Cookie&display=swap',
            crossorigin:''
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
            crossorigin:''
        }
    ]
})
</script>

<style scoped>
.font-cookie {
    font-family: 'Cookie', cursive;
    font-size: 1.5rem;
}
main {
  font-family: 'Roboto', sans-serif;
}
</style>