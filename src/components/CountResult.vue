<script>
import { store } from "../store.js";
export default {
  name: "CountResult",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div v-if="!store.loading_cards">
    <div class="mb-3 px-3 py-2 bg-light w-50 rounded fw-bold">Cards show: {{ store.cards.length }}</div>
  </div>
</template>
