<template>
    <div class="container">
        <h1>Recipe</h1>
    </div>
    <div class="container">
        <div v-for="recipe in data.recipes">
            <NuxtLink :to="`/recipes/${ recipe.id }`">
                <h2 class="title"> {{ recipe.name }}</h2>
                <img :src=recipe.image>
            </NuxtLink>

        </div>
    </div>
</template>

<script setup>
useHead({
    title: "MYShop | Recipe page",
    meta: [
        { name: "description", content: "all Recipe" }
    ]
})

const { data: data } = await useFetch('https://dummyjson.com/recipes?limit=10')
console.log(data)

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

.container h1{
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