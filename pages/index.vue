<template>
    <div class="container">
        <h1>หน้าหลัก</h1>
        <img src="/image/image01.jpg">
        <div>
            <HelloWorld />
        </div>

    </div>
</template>

<script setup>
import HelloWorld from '~/components/helloworld.vue';

// Header & Meta tag only one page
useHead({
    title: "MYShop | Homepage",
    meta: [
        { name: "description", content: "Shop,Sell product" }
    ]
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img {
    width: auto;
    height: 500px;
}
</style>