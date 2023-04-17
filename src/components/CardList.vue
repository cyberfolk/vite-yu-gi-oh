<script>
import { store } from "../store.js";
import CardItem from "./CardItem.vue";
export default {
  name: "CardItem",
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
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-3">
      <CardItem class="col" v-for="card in store.cards" :card="card" v-if="!store.loading" />
      <div class="loader" v-else>
        <p>loading...</p>
      </div>
    </div>
  </div>
</template>
