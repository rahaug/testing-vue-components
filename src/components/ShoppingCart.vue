<template>
  <div>
    <p
      v-for="item in items"
      :key="item"
    >
      {{ item }}
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: this.$store.state.cart.items
      }
    },
    methods: {
      add(item) {
        this.$store.dispatch('cart/add', item)
      }
    }
  }
</script>

<style scoped>

</style>