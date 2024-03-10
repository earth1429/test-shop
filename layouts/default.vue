<template>
    <div>
        <header>
            <nav>
                <h1 class="logo">MYShop</h1>
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/about">About us</NuxtLink>
                <NuxtLink to="/products">Products</NuxtLink>
                <NuxtLink to="/recipes">Recipe</NuxtLink>
                <NuxtLink to="/users">User</NuxtLink>
            </nav>
        </header>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped>
nav {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 12px;
    margin-right: 12px;
    font-size: 18px;
    padding: 10px;
}

nav a:hover {
    color: orange;
}

.logo {
    margin-right: auto;
    padding-right: 10px;
    margin-left: 12px;
    color: white;
}
</style>