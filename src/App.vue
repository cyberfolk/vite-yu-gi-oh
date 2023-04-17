<script>
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      store,
    };
  },

  methods: {},
  mounted() {
    store.fetchCard(this.store.API_URL);
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style></style>
