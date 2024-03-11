<template>
    <div class="container">
        <span class="underline text-4xl">Recipe</span>
    </div>
    <div class="container">
        <div v-for="recipe in data.recipes">
            <NuxtLink :to="`/recipes/${ recipe.id }`">
                <p class="title"> {{ recipe.name }}</p>
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