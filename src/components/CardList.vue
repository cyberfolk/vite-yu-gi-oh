<script>
import { store } from "../store.js";
import CardItem from "./CardItem.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  name: "CardList",
  components: {
    CardItem,
    PulseLoader,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section class="px-4 pb-4 rounded bg-warning">
    <PulseLoader v-if="store.loading_cards" color="#d48f38" size="30px"></PulseLoader>
    <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
      <CardItem class="col mt-4" v-for="card in store.cards" :card="card" />
    </div>
  </section>
</template>

<style lang="scss">
@use "../assets/scss/partials/variables" as *;

section {
  background-color: $light;
}
</style>
