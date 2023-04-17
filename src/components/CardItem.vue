<script>
import { store } from "../store.js";
export default {
  name: "CardItem",
  props: {
    card: Object,
  },
};
</script>

<template>
  <div>
    <div class="ycard">
      <img class="img-fluid" :src="card.card_images[0].image_url" :alt="card.name" />
      <div class="text text-center info pt-3 px-3">
        <div class="text-light name text-uppercase pb-3">{{ card.name }}</div>
        <div class="text-light name text-dark pb-3">{{ card.archetype }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

.ycard {
  height: 100%;
  background-color: $primary;
}
</style>
