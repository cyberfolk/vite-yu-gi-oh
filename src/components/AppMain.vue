<script>
import CardList from "./CardList.vue";
export default {
  name: "AppMain",
  components: { CardList },
};
</script>

<template>
  <main class="pt-5">
    <CardList />
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
main {
  background-color: $primary;
}
</style>
