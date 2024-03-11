<template>
    <div>
        <Head>
            <Title>MYShop | {{ user.firstName }}</Title>
            <Meta name="description" :content=user.firstName />
        </Head>
        <div class="container">
            <h1>Users No.{{ id }}</h1>
        </div>
        <div>
            <div class="container">
                <img :src=user.image>
                <div class="detail">

                    <span class="text-4xl pt-2 font-bold">First Name: </span>
                    <span> {{ user.firstName }}</span><br>

                    <span class="text-2xl pt-2 font-bold">Last Name: </span>
                    <span>{{ user.lastName }}</span><br>

                    <span class="text-2xl pt-2 font-bold">Address: ></span>
                    <span>{{ user.address.address }}, {{ user.address.city }}, {{ user.address.postalCode }}</span><br>

                    <span class="text-xl pt-2 font-bold">Phone number: </span>
                    <span>{{ user.phone }}</span><br>

                    <span class="text-xl pt-2 font-bold">BirthDate: </span>
                    <span>{{ user.birthDate }}</span><br>

                    <span class="text-xl pt-2 font-bold">Age: </span>
                    <span>{{ user.age }}</span><br>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
const { id } = useRoute().params;
const { data: user } = await useFetch('https://dummyjson.com/users/' + id)
console.log(user)
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