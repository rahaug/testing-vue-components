<template>
  <div class="section">
    <h1 class="title">
      Testing Workshop!
    </h1>

    <p class="mb-6">
      Welcome to Vue School's testing workshop.
    </p>

    <router-link
      :to="{ name: 'login' }"
      class="btn btn-teal"
    >
      Log In
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
