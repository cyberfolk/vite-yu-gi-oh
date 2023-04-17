<script>
import ButtonFilter from "./ButtonFilter.vue";
import CardList from "./CardList.vue";
export default {
  name: "AppMain",
  components: {
    CardList,
    ButtonFilter,
  },
};
</script>

<template>
  <main class="pt-5">
    <ButtonFilter />
    <CardList />
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
main {
  background-color: $primary;
}
</style>
