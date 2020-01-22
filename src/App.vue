<template>
  <div class="container mx-auto">
    <ul
      id="nav"
      class="my-8 list-unstyled flex"
    >
      <li
        v-for="link in links"
        :key="link.name"
        class="mx-4"
      >
        <router-link :to="{ name: link.name}">
          {{ link.title }}
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
  export default {
    data(){
      return {
        links: [
          { title: 'Home', name: 'home'},
          { title: 'Shopping List', name: 'shopping'},
          { title: 'Login', name: 'login'},
          { title: 'Messages', name: 'messages'}

        ]
      }
    }
  }
</script>