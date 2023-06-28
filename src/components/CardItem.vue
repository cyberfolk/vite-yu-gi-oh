<script>
export default {
  name: "CardItem",
  props: {
    card: Object,
  },
};
</script>

<template>
  <div>
    <div class="card border border-light shadow-sm">
      <img class="card-img-top" :src="card.card_images[0].image_url" :alt="card.name" />
      <div class="text text-center info pt-3 px-3">
        <div class="text-light name fw-bold text-uppercase pb-3">{{ card.name }}</div>
        <div class="text-light name text-dark pb-3">{{ card.archetype }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

.card {
  height: 100%;
  background-color: $primary;
  transition: transform 0.5s;
}

.card:hover {
  transform: scale(1.1);
}
</style>
