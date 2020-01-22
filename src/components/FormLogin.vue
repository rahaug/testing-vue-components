<template>
  <form
    class="form"
    @submit.prevent="login"
  >
    <div class="form-control">
      <label class="form-label">
        Email
        <input
          v-model="form.email"
          type="email"
          class="form-input"
          autofocus
        >
      </label>
    </div>

    <div class="form-control">
      <label
        class="form-label"
      >
        Password
        <input
          v-model="form.password"
          type="password"
          class="form-input"
        >
      </label>
    </div>

    <div
      v-if="!isValid && isDirty"
      class="form-control text-orange-500"
    >
      Please fill in both fields.
    </div>

    <div
      v-if="hasError"
      class="form-control text-red-500"
    >
      <span class="font-bold">
        Oh snap!
      </span> <br>
      Something went wrong. Please try again.
    </div>

    <div class="form-control">
      <button
        type="submit"
        class="btn btn-teal"
        :class="{'btn-loading': loading}"
      >
        <template v-if="!loading">
          Log In
        </template>
      </button>
    </div>
  </form>
</template>
<script>
import {auth} from '../api'

export default {
  props: {
    email: {
      type: String,
      required: false,
      default: null
    }
  },
  data () {
    return {
      form: {
        email: this.email,
        password: null
      },
      isDirty: false,
      hasError: false,
      loading: false
    }
  },
  computed: {
    isValid() {
      return this.form.email && this.form.password
    }
  },
  watch: {
    form: {
      deep: true,
      handler() {
        this.dirty = true
      }
    }
  },
  methods: {
    login() {
      this.isDirty = true
      this.hasError = false

      if(this.isValid) {
        this.loading = true
        return auth.login(this.form)
        .then(() => {
          this.$router.push({name: 'protected'})
        })
        .catch(() => this.hasError = true)
        .finally(() => this.loading = false)
      }

      return Promise.reject('Invalid form')
    }
  }
}
</script>
