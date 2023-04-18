<script>
import { store } from "../store.js";
export default {
  name: "ButtonFilter",
  //emits: ["makeSearch", "submit"],
  data() {
    return {
      store,
    };
  },
  computed: {
    filteredList() {
      return store.fetchCards(store.API_URL_CARD, store.filter);
    },
  },
};
</script>

<template>
  <div class="container">
    <select class="form-select my-3 w-50" v-model="store.filter" @change="$emit('filter-select')">
      <option value="" selected>- Select an Archetype</option>
      <option v-for="archetype in store.archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
.container {
  background-color: $primary;
}
</style>
