<template>
  <div class="section">
    <h1 class="title">
      Notifications
    </h1>

    <p>Custom prop validators are used to validate the type prop, which controls the appearance.</p>

    <form class="my-4">
      <label class="mr-4">
        <input
          v-model="type"
          type="radio"
          :value="null"
        > Default
      </label>
      <label
        v-for="option in options"
        :key="option.value"
        class="mr-4"
      >
        <input
          v-model="type"
          name="type"
          type="radio"
          :value="option.value"
        > {{ option.label }}
      </label>
      <label class="mr-4">
        <input
          v-model="type"
          type="radio"
          value="invalid"
        > Invalid
      </label>
    </form>


    <NotificationMessage :type="type || null">
      Today was a good day 🙌
    </NotificationMessage>
  </div>
</template>
<script>
    import NotificationMessage from '../components/NotificationMessage';
    export default {
        components: {
            NotificationMessage
        },
        data(){
            return {
                type: null,
                options: [
                    {
                        value: 'info',
                        label: 'Info'
                    },
                    {
                        value: 'error',
                        label: 'Error'
                    },
                    {
                        value: 'success',
                        label: 'Success'
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>
