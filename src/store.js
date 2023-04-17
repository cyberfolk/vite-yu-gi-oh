import { reactive } from 'vue'
import axios from "axios";

export const store = reactive({
    loading_cards: true,
    loading_archetypes: true,
    API_URL_CARD: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1000&offset=0",
    API_URL_ARCHETYPE: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    cards: null,
    archetypes: null,
    fetchCards(url) {
        axios
            .get(url)
            .then((response) => {
                this.cards = response.data.data;
                this.loading_cards = false;
            })
            .catch((err) => {
                console.log(err);
                console.error(err.message);
            });
    },
    fetchArchetypes(url) {
        axios
            .get(url)
            .then((response) => {
                this.archetypes = response.data;
                this.loading_archetypes = false;
            })
            .catch((err) => {
                console.log(err);
                console.error(err.message);
            });

    }
});