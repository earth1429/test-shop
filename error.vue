<template>
  <NuxtLayout>
    <div class="prose">
      <h1>Dang</h1>
      <p>
        <strong>{{ error.message }}</strong>
      </p>
      <p>It looks like something broke.</p>
      <p>Sorry about that.</p>
      <p>
        Go back to your
        <a @click="handleError">
          Homepage.
        </a>
      </p>
    </div>
  </NuxtLayout>
</template>


<style>
a {
  text-decoration: underline;
  font-size: larger;
}

a:hover {
  color: orange;
}


</style>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: '/',
  });
};

</script>