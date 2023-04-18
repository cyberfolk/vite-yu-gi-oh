<script>
import { store } from "../store.js";
import ButtonFilter from "./ButtonFilter.vue";
import CardList from "./CardList.vue";
export default {
  name: "AppMain",
  components: {
    CardList,
    ButtonFilter,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    store.fetchCards(store.API_URL_CARD);
    store.fetchArchetypes(store.API_URL_ARCHETYPE);
  },
};
</script>

<template>
  <main class="pt-5">
    <ButtonFilter @makeSearch="store.fetchCards(store.API_URL_CARD)" />
    <CardList />
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
main {
  background-color: $primary;
}
</style>
