<template>
  <div
    :class="cssClass"
    class="message"
  >
    <slot />
    <button
      class="close"
      @click="close"
    >
      X
    </button>
  </div>
</template>

<script>
  export default {
    props: {
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
        this.$emit('close', this.message)
      }
    }
  }
</script>

<style scoped>
  .message {
    @apply py-2 px-4 border-2 rounded-lg text-left relative my-2;
  button.close {
    @apply flex items-center justify-center h-6 w-6 p-1 text-xs font-semibold absolute top-0 right-0;
  }
  &-info {
     @apply text-blue-500 border-blue-200 bg-blue-100;
  button.close {
    @apply border-blue-300 text-blue-300;
  &:hover {
     @apply border-blue-400 text-blue-500;
   }
  }
  }
  &-error {
     @apply text-red-500 border-red-200 bg-red-100;
  button.close {
    @apply border-red-300 text-red-300;
  &:hover {
     @apply border-red-400 text-red-500;
   }
  }
  }
  &-success {
     @apply text-green-600 border-green-200 bg-green-100;
  button.close {
    @apply border-green-300 text-green-300;
  &:hover {
     @apply border-green-400 text-green-500;
   }
  }
  }
  }
</style>
