<script>
import { store } from "../store.js";
export default {
  name: "ButtonFilter",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <select class="form-select my-3" name="cars" id="cars">
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
