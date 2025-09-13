<script setup lang="ts">
const route = useRoute();
const error = route.query.error || "An unknown error occurred";
</script>

<template>
  <div class="card bg-base-400 container mt-5 min-h-72 text-center mx-auto flex flex-col justify-center items-center gap-4">
    <div role="alert" class="alert alert-error min-w-1/2  text-center">
      <span>Error! {{ error }}</span>
    </div>
    <NuxtLink to="/" class="btn btn-primary">
      Home <Icon name="tabler:arrow-left" size="33" />
    </NuxtLink>
  </div>
</template>
