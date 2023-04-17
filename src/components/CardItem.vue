<script>
import { store } from "../store.js";
export default {
  name: "CardItem",
  props: {
    card: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="card">
    <img class="img-fluid" :src="card.card_images.image_url" :alt="card.name" />
    <div class="text text-center">
      <div class="text-light archetype">{{ card.name }}</div>
      <div class="archetype">{{ card.archetype }}</div>
    </div>
  </div>
</template>
