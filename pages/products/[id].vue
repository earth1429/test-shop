<template>
    <div>
        <Head>
            <Title>MYShop | {{ product.title }}</Title>
            <Meta name="description" :content=product.description />
        </Head>
        <div class="container">
            <h1>Product Informaiton No.{{ id }}</h1>
        </div>
        <div>
            <div class="container">
                <img :src=product.thumbnail>
                <div class="detail">
                    <h1>Name: {{ product.title }}</h1>
                    <h2>Price: ${{ product.price }}</h2>
                    <h2>Category: {{ product.category }}</h2>
                    <h3>Brand: {{ product.brand }}</h3>
                    <h3>Description: {{ product.description }}</h3>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
const { id } = useRoute().params;
const { data: product } = await useFetch('https://dummyjson.com/products/' + id)
console.log(product)
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