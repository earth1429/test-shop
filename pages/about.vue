<template>
    <div class="container">
        <h1>เกี่ยวกับ</h1>
        <img src="/image/image02.jpg" alt="">
    </div>
</template>

<script setup>
useHead({
    title:"MYShop | about",
    meta:[
        {name:"description",content:"Developer Information"}
    ]
})
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img{
    width: auto;
    height: 500px;
}
</style>