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

<template></template>
