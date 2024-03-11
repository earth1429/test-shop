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

                    <span class="text-4xl pt-2 font-bold">Name: </span>
                    <span> {{ product.title }}</span><br>

                    <span class="text-2xl pt-2 font-bold">Price: $</span>
                    <span>{{ product.price }}</span><br>

                    <span class="text-2xl pt-2 font-bold">Category: ></span>
                    <span>{{ product.category }}</span><br>

                    <span class="text-xl pt-2 font-bold">Brand: </span>
                    <span>{{ product.brand }}</span><br>

                    <span class="text-xl pt-2 font-bold">Discount: </span>
                    <span>{{ product.discountPercentage }}</span><br>

                    <span class="text-xl pt-2 font-bold">Rating: </span>
                    <span>{{ product.rating }}</span><br>
                    
                    <span class="text-xl pt-2 font-bold">Description: </span>
                    <span>{{ product.description }}</span><br>
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

img{
    width: 300px;
    height: 300px;
}
</style>