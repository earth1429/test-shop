<template>
    <div>
        <Head>
            <Title>MYShop | {{ recipe.name }}</Title>
            <Meta name="description" :content=recipe.name />
        </Head>
        <div class="container">
            <h1>Recipe No.{{ id }}</h1>
        </div>
        <div>
            <div class="container">
                <img :src=recipe.image>
                <div class="detail">
                    <h1>Name: {{ recipe.name }}</h1>
                    <h2>Difficulty: ${{ recipe.difficulty }}</h2>
                    <h2>Category: {{ recipe.cuisine }}</h2>
                    <h3>Brand: {{ recipe.brand }}</h3>
                    <h3>Ingredients: {{ recipe.ingredients }}</h3>
                    <h3>Instructions: {{ recipe.instructions }}</h3>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
const { id } = useRoute().params;
const { data: recipe } = await useFetch('https://dummyjson.com/recipes/' + id)
console.log(recipe)
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}

.container h1 {
    text-decoration: underline green;
}

.detail {
    padding-left: 10px;

}
</style>