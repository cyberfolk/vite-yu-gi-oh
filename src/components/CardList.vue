<script>
import { store } from "../store.js";
import CardItem from "./CardItem.vue";
export default {
  name: "CardList",
  components: {
    CardItem,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section class="p-5">
    <div v-if="!store.loading_cards">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
        <CardItem class="col mt-4" v-for="card in store.cards" :card="card" />
      </div>
    </div>
    <div class="loader fs-4" v-else>loading...</div>
  </section>
</template>

<style lang="scss">
@use "../assets/scss/partials/variables" as *;
section {
  background-color: $light;
}
</style>
