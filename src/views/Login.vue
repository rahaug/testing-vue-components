<template>
  <div class="section">
    <h1 class="title text-center">
      Log in
    </h1>
    <div class="max-w-sm mx-auto px-8">
      <form-login />
    </div>
  </div>
</template>

<script>
import FormLogin from '../components/FormLogin'

export default {
  components: {
    FormLogin
  }
}
</script>
