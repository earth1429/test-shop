<template>
  <div>
    <NuxtChild :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  // This layout will be used for all error pages
}
</script>
