<template>
    <div>
        <Head>
            <Title>MYShop | {{ recipe.name }}</Title>
            <Meta name="description" :content=recipe.name />
        </Head>
        <div class="container">
            <span class="text-4xl">Recipe No.{{ id }}</span>
        </div>
        <div>
            <div class="container">
                <img :src=recipe.image>
                <div class="detail">
                    <span class="text-4xl pt-2 font-bold">Name: </span>
                    <span> {{ recipe.name }}</span><br>

                    <span class="text-2xl pt-2 font-bold">Difficulty: $</span>
                    <span>{{ recipe.difficulty }}</span><br>

                    <span class="text-2xl pt-2 font-bold">Category: ></span>
                    <span>{{ recipe.cuisine }}</span><br>

                    <span class="text-xl pt-2 font-bold">tags: </span>
                    <span>{{ recipe.tags }}</span><br>

                    <span class="text-xl pt-2 font-bold">Ingredients: </span>
                    <span>{{ recipe.ingredients }}</span><br>

                    <span class="text-xl pt-2 font-bold">Instructions: </span>
                    <span>{{ recipe.instructions }}</span><br>
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
img{
    width: 300px;
    height: 300px;
}
</style>