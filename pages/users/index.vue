<template>
    <div class="container">
        <h1>Users</h1>
    </div>
    <div class="container">
        <div v-for="user in data.users">
            <NuxtLink :to="`/users/${ user.id }`">
                <h2 class="title"> {{ user.firstName }} {{ user.lastName }}</h2>
                <img :src=user.image>
            </NuxtLink>

        </div>
    </div>
</template>

<script setup>
useHead({
    title: "MYShop | Users page",
    meta: [
        { name: "description", content: "all User" }
    ]
})

const { data: data } = await useFetch('https://dummyjson.com/users?limit=10')
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
    width: 200px;
    height: 200px;
}

a{
    text-decoration: none;
}
</style>