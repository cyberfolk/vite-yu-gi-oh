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
  <select class="form-select my-3 w-50" v-model="store.filter" @change="$emit('filter-select')">
    <option value="" selected>- Select an Archetype</option>
    <option v-for="archetype in store.archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
  </select>
</template>
