<script>
import { store } from "../store.js";
import ButtonFilter from "./ButtonFilter.vue";
import CountResult from "./CountResult.vue";
import CardList from "./CardList.vue";
export default {
  name: "AppMain",
  components: {
    CardList,
    ButtonFilter,
    CountResult,
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
  <main>
    <div class="container py-5">
      <ButtonFilter @filter-select="store.fetchCards(store.API_URL_CARD, store.filter)" />
      <CountResult />
      <CardList />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
main {
  background-color: $primary;
}
</style>
