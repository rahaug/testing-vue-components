<template>
  <div>
    <h1 class="title">
      {{ name }} <span class="float-right">({{ remainingItems }})</span>
    </h1>

    <hr class="mt-2 mb-4">

    <form
      @submit.prevent="add"
    >
      <div class="form-control">
        <div class="flex">
          <input
            ref="input"
            v-model="newItem"
            placeholder="Add a new item..."
            type="text"
            class="form-input mr-4"
          >
          <button
            type="submit"
            class="btn btn-teal"
          >
            Add
          </button>
        </div>
      </div>
    </form>

    <p
      v-if="!items.length"
      class="text-2xl text-center py-8 text-gray-600"
    >
      Your list is empty.
    </p>

    <ul>
      <li
        v-for="item in items"
        :key="item.name"
        class="flex justify-between my-1"
      >
        <button
          :class="{'line-through text-gray-500': item.bought}"
          title="Mark as done"
          @click="toggle(item)"
        >
          {{ item.name }}
        </button>
        <button
          class="font-bold text-red-300 text-sm hover:text-red-500 p-2"
          @click="remove(item)"
        >
          X
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        required: false,
        type: String,
        default: 'Shopping List'
      }
    },
    data(){
      return {
        items: [],
        newItem: null
      }
    },
    computed: {
      remainingItems(){
        return this.items.filter((item) => ! item.bought).length
      }
    },
    methods: {
      add(){
        if(this.newItem.length) {
          this.items.push({
            name: this.newItem,
            bought: false
          })
          this.newItem = null
          this.$refs.input.focus()
        }
      },
      remove(item) {
        this.items = this.items.filter((listItem) => listItem !== item)
      },
      toggle(item) {
        const listItem = this.items.find( (listItem) => listItem === item)
        listItem.bought = ! listItem.bought
      }
    }
  }
</script>