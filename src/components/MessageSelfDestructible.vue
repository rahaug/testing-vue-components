<template>
  <div class="my-1 bg-teal-100 border-2 border-teal-200 text-teal-600 rounded p-4">
    {{ message }} <span class="pl-2 float-right">{{ timeLeft }}</span>
  </div>
</template>
<script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },
    data(){
      return {
        interval: undefined,
        counter: 0,
        timer: 5
      }
    },
computed: {
  timeLeft(){
    return this.timer - this.counter
  }
},
mounted(){
  this.interval = setInterval(() => {
    this.counter++
    if(this.counter === this.timer) this.$destroy()
  }, 1000)
},
beforeDestroy() {
  this.interval = clearInterval(this.interval)
},
destroyed() {
  this.$emit('deleted', this.message)
  this.$el.remove()
}
  }
</script>

<style scoped>

</style>