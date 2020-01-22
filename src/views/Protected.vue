<template>
  <div class="section">
    <h1 class="title">
      Protected Area
    </h1>

    <p>
      Welcome to the super secret and protected part on our website!
    </p>

    <div class="mt-4">
      <router-link
        :to="{name: 'login'}"
        class="btn btn-teal"
      >
        Log Out
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Protected'
  }
</script>

<style scoped>

</style>