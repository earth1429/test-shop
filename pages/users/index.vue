<template>
    <div class="container">
        <span class="underline  text-4xl">Users</span>
    </div>
    <div class="container">
        <div v-for="user in data.users">
            <NuxtLink :to="`/users/${ user.id }`">
                <p class="title"> {{ user.firstName }} {{ user.lastName }}</p>
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
    width: 200px;
    height: 200px;
}

a{
    text-decoration: none;
}


</style>