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
  <div class="container p-5">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
      <CardItem class="col mt-4" v-for="card in store.cards" :card="card" v-if="!store.loading" />
      <div class="loader" v-else>
        <p>loading...</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "../assets/scss/partials/variables" as *;
.container {
  background-color: $light;
}
</style>
