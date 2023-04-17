<script>
import { store } from "../store.js";
export default {
  name: "ButtonFilter",
  data() {
    return {
      store,
      archetypeSelected: "",
    };
  },
  computed: {
    filteredList() {
      return store.cards.filter((card) => card.archetype == this.archetypeSelected);
    },
  },
};
</script>

<template>
  <div class="container">
    <select class="form-select my-3 w-50" v-model="archetypeSelected">
      <option value="">- Select an Archetype</option>
      <option v-for="archetype in store.archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
    </select>
    <!--     <div v-if="!archetypeSelected">{{ filteredList }}</div>
 -->
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
.container {
  background-color: $primary;
}
</style>
