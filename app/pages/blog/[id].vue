<template>
    <div>
        <h1>We are inside a blog page!</h1>
        <p>
            This is the blog with the id: {{ route.params.id }}
        </p>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>