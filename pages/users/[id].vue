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
                    <h1>First Name: {{ user.firstName }}</h1>
                    <h2>Last Name: {{ user.lastName }}</h2>
                    <h2>Address: {{ user.address.address }}, {{ user.address.city }}, {{ user.address.postalCode }}</h2>
                    <h3>Phone number: {{ user.phone }}</h3>
                    <h3>BirthDate: {{ user.birthDate }}</h3>
                    <h3>Age: {{ user.age }}</h3>
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
</style>