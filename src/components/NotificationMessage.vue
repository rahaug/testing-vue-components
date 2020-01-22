<template>
  <div :class="cssClass">
    <button @click="close">
      X
    </button>
    {{ message }}
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        required: true,
        type: String
      },
      type: {
        required: false,
        type: String,
        default: 'info',
        validator: (value) => ['info', 'error', 'success'].includes(value.toLowerCase())
      }
    },
    computed: {
      cssClass () {
        if(this.type === 'success') {
          return 'message-success'
        } else if (this.type === 'error') {
          return 'message-error'
        }

        return 'message-info'
      }
    },
    methods: {
      close() {

      }
    }
  }
</script>

<style scoped>

</style>