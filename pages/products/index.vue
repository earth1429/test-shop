<template>
    <div class="container">
        <span class="underline  text-4xl">หน้าหลักสินค้า</span>
    </div>
    <div class="container">

        <div v-for="product in data.products">
            <NuxtLink :to="`/products/${ product.id }`">
                <p class="title"> {{ product.title }}</p>
                <img :src=product.thumbnail>
            </NuxtLink>

        </div>
    </div>
</template>

<script setup>
useHead({
    title: "MYShop | Product page",
    meta: [
        { name: "description", content: "all Product" }
    ]
})

const { data: data } = await useFetch('https://dummyjson.com/products?limit=10')
// console.log(data)

</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.container div{
    width: 300px;
    height: 300px;
    margin: 30px 15px;
    background: #333;
}

.underline{
    text-decoration: underline green;
}

.title{
    color: white;
    text-align: center;
    font-size: 1.2em;
}

.container div:hover{
    background: orange;
}

img{
    width: 300px;
    height: 300px;
}

a{
    text-decoration: none;
}
</style>