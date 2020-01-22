<template>
  <div class="section">
    <h1 class="title">
      Messages
    </h1>
    <p>Create a message that will self-destruct within 5 seconds</p>

    <form
      class="mt-6"
      @submit.prevent="create"
    >
      <div class="form-control">
        <label class="form-label">
          Message
          <input
            ref="message"
            v-model="text"
            class="form-input"
            autofocus
          >
        </label>
      </div>

      <div class="form-control">
        <button
          type="submit"
          class="btn btn-teal"
        >
          Save
        </button>
      </div>
    </form>

    <div class="mt-6">
      <message-self-destructible
        v-for="message in messages"
        :key="message"
        :message="message"
        @deleted="remove"
      />
    </div>
  </div>
</template>

<script>
  import MessageSelfDestructible from '../components/MessageSelfDestructible'
  export default {
    components: {
      MessageSelfDestructible
    },
    data () {
      return {
        messages: [],
        text: null
      }
    },
    methods:{
      create(){
        if(this.text.length){
          this.messages.unshift(this.text)
          this.text = null
          this.$refs.message.focus()
        }
      },
      remove(message) {
        this.messages = this.messages.filter((m) => m !== message)
      }
    }
  }
</script>

<style scoped>

</style>